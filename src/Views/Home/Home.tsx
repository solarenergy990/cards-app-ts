import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import s from './Home.module.scss';

const Home = () => {
    let navigate = useNavigate();

const onHandleClick = () => {

    navigate('/cards', {replace: true})

}

  return (
    <div className={s.card}>
      <Card className="text-center">
        <Card.Header>Home view</Card.Header>
        <Card.Body>
          <Card.Title>Home view title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Card.Text>
          <Button variant="primary" onClick={onHandleClick}>Show cards</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
