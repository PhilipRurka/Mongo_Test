#!/bin/bash

read -p "Are you sure you want to continue? You are about to replace your dump/local. (y/n) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]
then
    mongodump --uri=mongodb+srv://philip_rurka@cluster0.pvszw5r.mongodb.net/ --out=mongodb/dump/production

    echo ""
    echo ""
    echo "┏━━━┓╋╋╋╋╋╋╋╋╋┏━━━┓╋╋╋╋╋╋┏┓"
    echo "┗┓┏┓┃╋╋╋╋╋╋╋╋╋┃┏━┓┃╋╋╋╋╋╋┃┃"
    echo "╋┃┃┃┣┓┏┳┓┏┳━━┓┃┗━┛┣━┳━━┳━┛┃"
    echo "╋┃┃┃┃┃┃┃┗┛┃┏┓┃┃┏━━┫┏┫┏┓┃┏┓┃"
    echo "┏┛┗┛┃┗┛┃┃┃┃┗┛┃┃┃╋╋┃┃┃┗┛┃┗┛┃"
    echo "┗━━━┻━━┻┻┻┫┏━┛┗┛╋╋┗┛┗━━┻━━┛"
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