import { Image, Table} from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import Api from '../../Api';



function ResumePlant({plant}) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
      Api.get('plants')
        .then(res => res.data)
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

  if (error) {
    return <Navigate replace to="/403" />

  } else if (!isLoaded) {

    return(<div>Wait</div>)
  } else {

    return (
        <div class="container-fluid rounded">
            <div class="row">
                <div class="col-md-4">
                <Image rounded className='w-100' style={{height:"120px", objectFit: 'cover'}} src='https://i0.wp.com/osezplantercapousse.com/wp-content/uploads/2019/12/img_1144.jpg?resize=955%2C1536&ssl=1'></Image>
                </div>
                <div class="col-md-8">

                <Table hover>
                    <tbody>
                        <tr>
                            <td>Nom</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>Adresse</td>
                            <td>Jacob</td>
                        </tr>
                        <tr>
                            <td>Espece</td>
                            <td>Larry the Bird</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
            </div>
        </div>
    )

}
}
export default ResumePlant;
