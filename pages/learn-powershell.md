---
title: Starting with powershell
description: This will be kinda mini-course for people who want to get an overview of powershell.
date: 2022/09/23
tag: powershell,shell,terminal
author: Ropoko
---

# What's Powershell?
It's a command-line shell from microsoft, that's built-On Windows. It's also Open-source and written in C#, you can see the source code on [github](https://github.com/PowerShell/PowerShell).

We will be using version 5.1, if you don't know your version, try:

```powershell
$PSVersionTable.PSVersion
```

# Command-lets
The name means "Command-Let" came from the pattern used to name all the commands in powershell, where first we have some verb and then we have a noun (e.g.: _Get-Command_)

We can see all the commands available by typing:
```powershell
Get-Command -CommandType Cmdlet
```

# Getting help
To get help from any command, you just need to use `Get-help x` where **x** is the command you're trying to know about.

## Getting examples
If you want to get some examples about the command usage, you can use `Get-help x -Examples`.

## Open on browser
To see the help command in the official microsoft's page, you need to add the flag `-Online`, the full command would be like `Get-help x -Online`.


## Open in another window
`-ShowWindow` -> It will open another GUI window.

Also, you can use the command `Update-help` to get the new version of the commands documentation.
