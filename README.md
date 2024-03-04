# Mongo DB Todo List

This projects stack is the following.

<!DOCTYPE html>
<html>
  <head>
    <style>
      .list {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .item {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 15px;
      }
      .logo {
        width: 48px;
        height: 48px;
        border-radius: 10px;
      }
      .name {
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <ul class='list'>
      <li class='item'>
        <img src="https://skillicons.dev/icons?i=vercel" />
        <span class='name'>Vercel</span>
      </li>
      <li class='item'>
        <img src="https://skillicons.dev/icons?i=nextjs" />
        <span class='name'>Nextjs</span>
      </li>
      <li class='item'>
        <img src="https://skillicons.dev/icons?i=ts" />
        <span class='name'>Typescript</span>
      </li>
      <li class='item'>
        <img src="https://skillicons.dev/icons?i=mongodb" />
        <span class='name'>Mongodb</span>
      </li>
      <li class='item'>
        <img class='logo' src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/mongoose.png?raw=true" />
        <span class='name'>Mongoose</span>
      </li>
      <li class='item'>
        <img src="https://skillicons.dev/icons?i=tailwind" />
        <span class='name'>Tailwind</span>
      </li>
      <li class='item'>
        <img class='logo' src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/prettier.png?raw=true" />
        <span class='name'>Prettier</span>
      </li>
      <li class='item'>
        <img class='logo' src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/eslint.png?raw=true" />
        <span class='name'>ESLint</span>
      </li>
      <li class='item'>
        <img class='logo' src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/husky.png?raw=true" />
        <span class='name'>Husky</span>
      </li>
      <li class='item'>
        <img src="https://skillicons.dev/icons?i=nodejs" />
        <span class='name'>Node v20.11.0</span>
      </li>
    </ul>
  </body>
</html>

<br/>

## Post Clone

After cloning this project and running yarn, it is important to follow these steps

<br/>

### Husky configuration

We are utilizing Husky to execute eslint on `pre-commit` and eslint & build on `pre-push`.

#### Clone and move husky

Some Git Gui applications require these files to also be located in `.git`. This said run this.

```shell
husky install && \
rm -rf .git/hooks && \
ln -s ../.husky .git/hooks
```

> There is a chance that you must create `.git/hooks`. You will know by the output of the command above.

#### Enable execution

We need to enable the execution of these two shell scripts. EEnter this in your terminal at the root of this project.

```shell
chmod +x .husky/pre-commit .husky/pre-push && \
chmod +x .git/hooks/pre-commit .git/hooks/pre-push && \
husky install
```

### Mongodb

There are a few shell scripts that help automate dumping and resporing of data. To enable the execution of these scripts, run the following.

```shell
chmod +x mongodb/shellScripts/restore/sync_local_to_local.sh && \
chmod +x mongodb/shellScripts/restore/sync_prod_to_local.sh && \
chmod +x mongodb/shellScripts/dump/dump_local.sh && \
chmod +x mongodb/shellScripts/dump/dump_prod.sh
```
