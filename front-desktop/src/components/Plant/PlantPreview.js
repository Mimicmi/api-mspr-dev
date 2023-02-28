import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge';

import Button from 'react-bootstrap/Button';

function PlantPreview({ item, onRemovePlant }) {


  const urlPhoto = () => {
    if(item.profil_photo) {
      return "http://localhost:8090/upload/" + item.profil_photo
    } else {
      return "https://cdn.shopify.com/s/files/1/0004/2654/1108/products/LIVRAISON_PLANTE_GRANDE_MONSTERA_DELICIOSA_2_800x.jpg?v=1622459168"
    }
  }
  return (
    <div className="container mx-auto" >
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <div className="card card-body">
            <div className="d-flex align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
              <div className="mr-2 mb-3 mb-lg-0 col-lg-3 col-sm-12 col-12">
                <Image src={urlPhoto()} rounded="true" style={{ objectFit: 'cover' }} width="150" height="150" alt="" />
              </div>

              <div className="media-body col-lg-6  col-sm-12">
                <h6 className="media-title font-weight-semibold mb-lg-3 col-12">
                  <a href={'my-plant/' + item.id } data-abc="true">My Plantos name</a>
                </h6>

                <Badge pill bg="primary" className="mb-3 mb-lg-4">
                  Espece
                </Badge>

                <p className="mb-3">Conseille d'utilisation | TIPS | Dans le doute, mieux vaut ne pas arroser assez que trop </p>

              </div>

              <div class="mt-3 mt-lg-0 ml-lg-3 text-center d-lg-flex  flex-lg-column col-lg-3 col-sm-12 col-12">
                <Button href={'my-plant/edit/' + item.id } variant="primary">Editer</Button>
                <Button href={'my-plant/' + item.id } variant="light">Voir</Button>
                <Button onClick={() => {onRemovePlant(item.id)}} variant="warning">Supprimer</Button>
              </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PlantPreview;