REQUIRED
Your Personal Blog!
Create a database named blog
Create the following tables
Blogs
  id
  title
  content
  _created

Authors
  id
  name
  email
  _created

Tags
  id
  name
  _created

BlogTags
  blogid
  tagid
  _created
Create a stored procedure named spBlogTags to pull back the tag names for a blog
Parameter: blogid
Hint: You only need to join BlogTags and Tags
Download the Covalence React Boilerplate with DB Connector (attached)
Initialize the boilerplate as a git repository, and connect it to a repo on your github.
Run the server
Run npm install
Run npm run dev
Go to http://localhost:3000 and make sure that the app is running
Create the React front end:
Create a component to display a list of blogs
Create a component to input blogs
Create a component to display an individual blog
Resources (click to download):
Covalence React Boilerplate with DB Connector.zip