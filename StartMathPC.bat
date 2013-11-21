@echo off
echo Starting Lesson Menu Page, Please Wait...
set _currentPath=%CD%
cd .SFAF\Chrome-win32
start Chrome.exe --start-maximized --allow-file-access-from-files --app="%_currentPath%\.SFAF\StartMath.html"
