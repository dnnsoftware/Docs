# Copy-Docs C:\Websites\development\DNN-Docs\ C:\Websites\demo\dnn-docs-combined

function Copy-Docs(){
    Param(
        [string]$from,
        [string]$to,
        [string]$buildPath ="_build/html"
    )

    $mainFrom = [io.path]::combine($from, 'main', $buildPath)
    $mainTo = $to
    Get-ChildItem -path $mainFrom -Recurse *.snag | remove-item     
    Get-ChildItem -Path $mainFrom | % { 
      Copy-Item $_.fullname "$mainTo" -Recurse -Force  
    }

    $adminFrom = [io.path]::combine($from, 'admin', $buildPath)
    $adminTo = join-path $to 'admin'    
    Get-ChildItem -path $adminFrom -Recurse *.snag | remove-item     
    Get-ChildItem -Path $adminFrom | % { 
      Copy-Item $_.fullname "$adminTo" -Recurse -Force  
    }

    $devFrom = [io.path]::combine($from, 'dev', $buildPath)
    $devTo = join-path $to 'dev'    
    Get-ChildItem -path $devFrom -Recurse *.snag | remove-item     
    Get-ChildItem -Path $devFrom | % { 
      Copy-Item $_.fullname "$devTo" -Recurse -Force  
    }

    $designFrom = [io.path]::combine($from, 'design', $buildPath)
    $designTo = join-path $to 'design'    
    Get-ChildItem -path $designFrom -Recurse *.snag | remove-item     
    Get-ChildItem -Path $designFrom | % { 
      Copy-Item $_.fullname "$designTo" -Recurse -Force  
    }
}

