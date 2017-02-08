import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBlock, CardHeader } from 'reactstrap';

import style from '../../Styles/login.scss';

import Auth from '../../Containers/Auth';
import Footer from './Shared/Footer';

class Login extends React.Component {
    render() {
        return (
            <div className="h-100">
                <Container className="h-100">
                    <Row className="justify-content-center h-100">
                        <Col sm="6" className="align-self-center">
                            <Card>
                                <CardHeader>Login</CardHeader>
                                <CardBlock>
                                    <Auth />
                                </CardBlock>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default Login;