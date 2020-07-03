import React from 'react';
import { Container, Row, Col } from '../Layout';

const PlainContent = ({title, content}) => {
    return (
        <div className="plain-content">
            <Container>
                <Row>
                    <Col sizes="col-12">
                        <h1 className="plain-content__title">
                            { title }
                        </h1>

                        {
                            content
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default PlainContent;