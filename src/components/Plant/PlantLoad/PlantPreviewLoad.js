import Image from 'react-bootstrap/Image'
import Placeholder from 'react-bootstrap/Placeholder';

function PlantPreviewLoad() {

  return (
    <div className="container mx-auto" >
    <Placeholder as={'div'} animation='wave'>
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <div className="card card-body">
            <div className="d-flex align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
              <div className="mr-2 mb-3 mb-lg-0 col-lg-3 col-sm-12 col-12">
                <Image src="https://cdn.shopify.com/s/files/1/0004/2654/1108/products/LIVRAISON_PLANTE_GRANDE_MONSTERA_DELICIOSA_2_800x.jpg?v=1622459168" rounded="true" style={{ objectFit: 'cover' }} width="150" height="150" alt="" />
              </div>

              <div className="media-body col-lg-6  col-sm-12 col-12">
                <h6 className="media-title font-weight-semibold mb-lg-3">
                    <Placeholder xs={8} size="lg" bg="primary" />
                </h6>

                <div pill bg="primary" className="mb-3 mb-lg-4">
                <Placeholder xs={2} bg="primary" />
                </div>

                <p className="mb-3"><Placeholder xs={10} /> <Placeholder xs={3}/> <Placeholder xs={6} /></p>

              </div>

              <div class="mt-3 mt-lg-0 ml-lg-3 text-center d-lg-flex flex-lg-column col-lg-3 col-sm-12 col-12">
                <Placeholder.Button lg={10} sm={3} xs={2} variant="primary" />
                <Placeholder.Button lg={10} sm={3} xs={2} variant="light"  />
                <Placeholder.Button lg={10} sm={3} xs={2} variant="warning" />
 
              </div>
                
              </div>
            </div>
          </div>
        </div>
        </Placeholder>
      </div>



    )

}

export default PlantPreviewLoad;