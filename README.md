# Simple API for social network
This is a server simulation for a social network. It pulls data from your database and stores it in JSON format. The Faker library was used to create random users
# installing project
1. Fork repository
![Screenshot_343](https://user-images.githubusercontent.com/104434132/204560917-22c5e742-4e51-4bdc-8926-45dda48aa1bf.png)
![Screenshot_344](https://user-images.githubusercontent.com/104434132/204560966-7c698d0e-1c56-423c-b49c-4f50b95a70b6.png)

2. Clone project

![Screenshot_345](https://user-images.githubusercontent.com/104434132/204563940-4bc19b5d-0b95-4a2c-9292-4e1c59059a0f.png)

  ```sh
  $ git clone <youre link>
  ```
3. Install all dependencies(use command line):
```sh 
$ npm i
``` 
or
```sh
$ npm install
```

# If you want connect you database
1. Open config folder and search ```config.js``` file <br> <br>
![Screenshot_346](https://user-images.githubusercontent.com/104434132/204564989-2fc0be77-f86d-4b71-a730-a886c6094f98.png)

2. Change the fields according to your data

# Stack
1. JavaScript
2. Node.js
3. Sequelize
4. Express

# Endpoints

1. /users - endpoint for receiving all users (with subscriptions).
<br> <br>

![Screenshot_347](https://user-images.githubusercontent.com/104434132/204738906-1047e3d5-39a7-4f6b-b60f-fd9e3bfd07b2.png)

2. /users/<id>/friends?order_by=<column_name>&order_type=<DESC_or_ASC> - endpoint to get information about the user with friends and available sorting by the specified field. (for friends we will consider mutual subscription).
<br> <br>
![Screenshot_350](https://user-images.githubusercontent.com/104434132/204740337-bca9f83b-a624-4ec0-b93b-de2668e2148f.png)

3. /max-following - endpoint for receiving the top 5 users who made the most subscriptions.
<br> <br>

![Screenshot_351](https://user-images.githubusercontent.com/104434132/204741969-3a99709c-73f7-4ca6-aee3-1adf9e008479.png)

4. /not-following - endpoint for receiving users who have made 0 subscriptions.
<br><br>

![Screenshot_352](https://user-images.githubusercontent.com/104434132/204742196-f12cb133-4055-4ca6-9241-6aabc2db008f.png)


