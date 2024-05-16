import MainTitle from '../components/MainTitle';
import Description from '../components/Description';
import FormLayout from '../components/FormLayout';

function Signin(props) {
    return (
      <div className="content-card">
            <MainTitle title="Prijavi se!" />
            <Description desc="Prijavi se kako bi mogao upravljati svojim računom!" />
            <FormLayout />
      </div>
    );
}

export default Signin;