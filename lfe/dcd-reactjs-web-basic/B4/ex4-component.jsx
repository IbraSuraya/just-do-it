function SayHello() {
  const name = props.name;
  const company = props.company;
 
  return (
    <p>
      Hello, {name} from {company}!
    </p>
  );
}

// Memanggil component dgn jsx dan bisa banyak
<SayHello />

// ======== Contoh Best Practice mengirim banyak prop ke function ========
function InstagramProfile(props) {
  const name = props.name;
  const username = props.username;
  const bio = props.bio;
  const isVerified = props.isVerified;
  
  return (
    <div className="container">
      <dl>
        <dt>Name: </dt><dd>{name}</dd>
        <dt>Username: </dt><dd>{username}</dd>
        <dt>Bio: </dt><dd>{bio}</dd>
        <dt>Verified: </dt><dd>{isVerified ? 'yes' : 'no'}</dd>
      </dl>
    </div>
  );
}

<InstagramProfile
  name="Dicoding Indonesia"
  username="dicoding"
  bio="Bangun Karirmu Sebagai Developer Profesional"
  isVerified // pemberian nilai boolean "true" cukup dengan menuliskan nama properti tanpa nilai apa pun
/>;

// ======== Contoh Best Practice mengirim banyak prop ke function + ES6 object Destructuring ========
function InstagramProfile1({ name, username, bio, isVerified }) {
  return (
    <div className="container">
      <dl>
        <dt>Name: </dt><dd>{name}</dd>
        <dt>Username: </dt><dd>{username}</dd>
        <dt>Bio: </dt><dd>{bio}</dd>
        <dt>Verified: </dt><dd>{isVerified ? 'yes' : 'no'}</dd>
      </dl>
    </div>
  );
}

// Pemanggilan dengan properti spesial childern
function SayHello1({ children }) {
  return <p>Hello, {children}!</p>;
}
 
<SayHello1>Dicoding</SayHello1>;