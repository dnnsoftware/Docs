import sys
from docutils import nodes
from docutils.parsers.rst import Directive
from docutils.parsers.rst import directives


def setup(app):
    app.add_node(LinkNode, html=(LinkNode.visit_link, LinkNode.depart_link))
    app.add_directive('link', LinkDirective)
    return {'version': '0.1'}

class LinkNode(nodes.General, nodes.Element): 

    def __init__(self, text, **options):
        super(LinkNode, self).__init__(text, **options)
    
    def starttag(self, node, tagname, suffix='\n', empty=False, **attributes):
        """
        Construct and return a start tag given a node (id & class attributes
        are extracted), tag name, and optional attributes.
        """
        tagname = tagname.lower()
        prefix = []
        atts = {}
        ids = []
        for (name, value) in attributes.items():
            atts[name.lower()] = value
        classes = []
        languages = []
        # unify class arguments and move language specification
        for cls in node.get('classes', []) + atts.pop('class', '').split() :
            if cls.startswith('language-'):
                languages.append(cls[9:])
            elif cls.strip() and cls not in classes:
                classes.append(cls)
        if languages:
            # attribute name is 'lang' in XHTML 1.0 but 'xml:lang' in 1.1
            atts[self.lang_attribute] = languages[0]
        if classes:
            atts['class'] = ' '.join(classes)
        assert 'id' not in atts
        ids.extend(node.get('ids', []))
        if 'ids' in atts:
            ids.extend(atts['ids'])
            del atts['ids']
        if ids:
            atts['id'] = ids[0]
            for id in ids[1:]:
                # Add empty "span" elements for additional IDs.  Note
                # that we cannot use empty "a" elements because there
                # may be targets inside of references, but nested "a"
                # elements aren't allowed in XHTML (even if they do
                # not all have a "href" attribute).
                if empty:
                    # Empty tag.  Insert target right in front of element.
                    prefix.append('<span id="%s"></span>' % id)
                else:
                    # Non-empty tag.  Place the auxiliary <span> tag
                    # *inside* the element, as the first child.
                    suffix += '<span id="%s"></span>' % id
        attlist = atts.items()
        attlist.sort()
        parts = [tagname]
        for name, value in attlist:
            # value=None was used for boolean attributes without
            # value, but this isn't supported by XHTML.
            assert value is not None
            if isinstance(value, list):
                values = [unicode(v) for v in value]
                parts.append('%s="%s"' % (name.lower(),
                                          self.attval(' '.join(values))))
            else:
                parts.append('%s="%s"' % (name.lower(),
                                          self.attval(unicode(value))))
        if empty:
            infix = ' /'
        else:
            infix = ''
        return ''.join(prefix) + '<%s%s>' % (' '.join(parts), infix) + suffix

    @staticmethod
    def visit_link(self, node):
        atts = {}
        atts['href'] = node['href']
        self.body.append(self.starttag(node, 'a', '', **atts))
    
    @staticmethod
    def depart_link(self, node=None):
        self.body.append('</a>\n')
    
class LinkDirective(Directive):

    required_arguments = 1
    optional_arguments = 0
    final_argument_whitespace = True
    option_spec = {
        'class': directives.class_option
    }
    has_content = True

    def run(self):
        self.assert_has_content()
        env = self.state.document.settings.env   
        config = env.config
        linkRoot = config["link_root"]        
        text = '\n'.join(self.content)

        node = LinkNode(text, **self.options)
        node['classes'] += self.options.get('class', [])
        
        if self.arguments[0].startswith('~'):
            node['href'] = self.arguments[0].replace('~', linkRoot, 1)
        else:
            node['href'] = self.arguments[0]
        
        self.add_name(node)
        self.state.nested_parse(self.content, self.content_offset, node)
        return [node]


