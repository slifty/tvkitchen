# Installing the TV Kitchen

## Core Prerequisites
This is a Node project designed to run on Ubuntu 16.4 LTS.

It is written using Node 8.x and Yarn.

```shell

$> sudo apt-get install -y build-essential
$> curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$> sudo apt-get install -y nodejs
$> curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$> echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$> sudo apt-get update && sudo apt-get install -y yarn

```

You also will need to install git, obviously I suppose.

```
$> sudo apt-get install -y git
```

## Advised tools

For now, you may as well add in some of the other tools that are likely
to be used.

```shell
$> sudo apt-get install -y ffmpeg
```

## Installing
1. Clone the repository

`git clone git@github.com:slifty/tvkitchen.git`

2. Run the installation scripts

```shell
$> cd tvkitchen
$> yarn install
```

## Running

Make sure you are in the project's root directory

```shell
$> yarn prod:start
```
