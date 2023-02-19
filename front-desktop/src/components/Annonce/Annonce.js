import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image'

import './Annonce.css'

function Annonce({ annonce }) {
    return (
        <Card className='m-2'>
            <div class="container-fluid">
                <div class="row p-1 m-1">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-3 px-0 d-flex align-items-center justify-content-center">
                                <Image roundedCircle="true" className='float-left' width={60} height={60} src='https://i0.wp.com/osezplantercapousse.com/wp-content/uploads/2019/12/img_1144.jpg?resize=955%2C1536&ssl=1'></Image>
                            </div>
                            <div class="col-6 text-start">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12 px-1">
                                                <p className='mb-0 text-truncate'>Antoine Gillet fdklmj dkljdsfljk</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 px-1">
                                                <p className='mb-0 fs-6 fw-lighter text-muted fst-italic text-truncate'>Craponne (69290) fdlkgjfgdklj</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 d-flex px-1 pt-1 text-truncate">
                                                <Badge pill bg="secondary" className='me-1'>Lila</Badge>
                                                <Badge pill bg="secondary" className='me-1'>Arbuste</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 d-flex align-items-center justify-content-center">
                                <Badge bg="primary"><h5>15€</h5></Badge>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-12" style={{ height: '65px' }} >
                                <p class="lead crop-text-2">
                                    sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 d-flex flex-column">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12">
                                                <Badge pill bg="info">10/12/2023 12h30</Badge>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <Badge pill bg="info">01/01/2024 10h30</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 d-flex align-items-center justify-content-center">
                                <Button href={'annonce/'+annonce.id} variant="primary">Arroser</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )

}
export default Annonce;
