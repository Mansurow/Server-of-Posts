# Server-of-Posts created by Vlad Mansurov
Here you can create posts in the form data: id, content, date of created, removed. In addition to creating posts, you can also edit, add, delete, and restore posts.

The server works with URL requests:
   -if you want to create a post you need to enter a URL
       http://localhost:9999/posts.post?content=first (not necessary "first")
   -if you want to get all posts you need to enter a URL
       http://localhost:9999/posts.get
   -if you want to edit a post you need to enter a URL
       http://localhost:9999/posts.edit?id=1&content=upgrade (not necessary "upgrade")
   -if you want to get a post you need to enter a URL
       http://localhost:9999/posts.getById?id=1 (not necessary 1)
   -if you want to delete a post you need to enter a URL
       http://localhost:9999/posts.delete?id=1 (not necessary 1)
   -if you want to restore a post you need to enter a URL
       http://localhost:9999/posts.restore?id=1 (not necessary 1)
   ________________________________________________________________
   Здесь вы можете создавать посты в виде данных: id, контент, дата создания, удаления. Помимо создания постов, вы также можете редактировать, добавлять, удалять и восстанавливать их.

   Сервер работает с URL запросами:
   -если вы хотите создать пост, вам нужно ввести URL-адрес
      http://localhost:9999/posts.post?содержание=first (не обязательно "first")
   -если вы хотите получить все пост, вам нужно ввести URL-адрес
      http://localhost:9999/posts.get
   -если вы хотите отредактировать пост, вам нужно ввести URL-адрес
      http://localhost:9999/posts.edit?id=1&content=upgrade (не обязательно "upgrade")
   -если вы хотите получить пост, вам нужно ввести URL-адрес
      http://localhost:9999/posts.getById?id=1 (не обязательно 1)
   -если вы хотите удалить пост, вам нужно ввести URL-адрес
      http://localhost:9999/posts.удалить?id=1 (не обязательно 1)
   -если вы хотите восстановить пост, вам нужно ввести URL-адрес
      http://localhost:9999/posts.restore?id=1 (не обязательно 1)
