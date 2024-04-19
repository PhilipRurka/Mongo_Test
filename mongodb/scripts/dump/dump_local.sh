#!/bin/bash

read -p "Are you sure you want to continue? You are about to replace your dump/local. (y/n) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]
then
    mongodump --uri=mongodb://localhost:27017 --out=mongodb/dump/local

    echo ""
    echo ""
    echo "┏━━━┓╋╋╋╋╋╋╋╋╋┏┓╋╋╋╋╋╋╋╋╋╋╋┏┓"
    echo "┗┓┏┓┃╋╋╋╋╋╋╋╋╋┃┃╋╋╋╋╋╋╋╋╋╋╋┃┃"
    echo "╋┃┃┃┣┓┏┳┓┏┳━━┓┃┃╋╋┏━━┳━━┳━━┫┃"
    echo "╋┃┃┃┃┃┃┃┗┛┃┏┓┃┃┃╋┏┫┏┓┃┏━┫┏┓┃┃"
    echo "┏┛┗┛┃┗┛┃┃┃┃┗┛┃┃┗━┛┃┗┛┃┗━┫┏┓┃┗┓"
    echo "┗━━━┻━━┻┻┻┫┏━┛┗━━━┻━━┻━━┻┛┗┻━┛"
    echo "╋╋╋╋╋╋╋╋╋╋┃┃"
    echo "╋╋╋╋╋╋╋╋╋╋┗┛"
    echo ""
    echo ""
    
else
    echo ""
    echo ""
    echo "░█████╗░██████╗░░█████╗░██████╗░████████╗"
    echo "██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝"
    echo "███████║██████╦╝██║░░██║██████╔╝░░░██║░░░"
    echo "██╔══██║██╔══██╗██║░░██║██╔══██╗░░░██║░░░"
    echo "██║░░██║██████╦╝╚█████╔╝██║░░██║░░░██║░░░"
    echo "╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░"
    echo ""
    echo ""
    
    exit 0
fi