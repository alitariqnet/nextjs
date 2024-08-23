import LikeButton from './like-button';

      function Header(props) {
        return (<h1>Develop. Preview. Ship. {props.title ? props.title : ""}.</h1>)
      }

      export default function HomePage() {
        const names = [{name:'Umar', id:1}, {name:'Ali', id:2}, {name:'Hassan', id:3}];


        return (
          <div>
            <Header />
            <ul>
                { names.map((name)=> (
                    <li key={name.id}>{name.name}</li>
                ))}
            </ul>     
           <LikeButton/>
          </div>
        );
      }

    
