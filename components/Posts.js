import Post from './Post';
const posts = [
  {
    id: '123',
    username: 'Pedro',
    userImg:
      'https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png',
    img: 'https://viajes.nationalgeographic.com.es/medio/2021/03/12/entre-las-mejores-del-mundo_b9cadbb5_752x501.jpg',
    caption: 'Hello! How are you?',
  },
  {
    id: '123',
    username: 'Pedro',
    userImg:
      'https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png',
    img: 'https://viajes.nationalgeographic.com.es/medio/2021/03/12/entre-las-mejores-del-mundo_b9cadbb5_752x501.jpg',
    caption: 'Hello! How are you?',
  },
];

function Posts() {
  return (
    <div>
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;
