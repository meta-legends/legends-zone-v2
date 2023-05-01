import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { topSellers } from "../../common/data";
import { getEstimateTokenRewards } from '../../client/ApiMetaLegends';
import assetImgArmor from '../../assets/images/metalegends/staked-asset/ArmorRough.png';
import assetImgPet from '../../assets/images/metalegends/staked-asset/HeavyPetRough.png';
import assetImgVehicle from '../../assets/images/metalegends/staked-asset/GoldboiCar.png';
import assetImgResidence from '../../assets/images/metalegends/staked-asset/Residence.png';
import assetImgLand from '../../assets/images/metalegends/staked-asset/Lands.png';


const AssetStaked = () => {

  const [totalTokenRewards, setTotalTokenRewards] = useState(0);

  const [armorPerkPackage, setArmorPerkPackage] = useState({quantity: 0, tokens: 0});
  const [petPerkPackage, setPetPerkPackage] = useState({quantity: 0, tokens: 0});
  const [vehiclePerkPackage, setVehiclePerkPackage] = useState({quantity: 0, tokens: 0});
  const [residencePerkPackage, setResidencePerkPackage] = useState({quantity: 0, tokens: 0});
  const [landPerkPackage, setLandPerkPackage] = useState({quantity: 0, tokens: 0});

  const [walletAddress, setWalletAddress] = useState('');
  const [assets, setAssets] = useState([]);



  const estimateTokenRewards = async (address) => {
    getEstimateTokenRewards(address).then((res) => {
      console.log(res);
      const data = [
        {
          label: 'Armors',
          img: assetImgArmor,
          data: res['perk_packages']['armor'],
        }, {
          label: 'Pets',
          img: assetImgPet,
          data: res['perk_packages']['pet'],
        }, {
          label: 'Vehicles',
          img: assetImgVehicle,
          data: res['perk_packages']['vehicle'],
        }, {
          label: 'Residences',
          img: assetImgResidence,
          data: res['perk_packages']['residence'],
        },{
          label: 'Lands',
          img: assetImgLand,
          data: res['perk_packages']['land'],
        }
      ];
      setAssets(data);
      console.log(data);
      setTotalTokenRewards(res['total_token_rewards'])
    });

  }

  useEffect(() => {

    const fetchData = async (address) => {
      await estimateTokenRewards(address);
    }

    if (sessionStorage.getItem("authUser")) {
      const obj = JSON.parse(sessionStorage.getItem("authUser"));
      setWalletAddress(obj.wallet);
      fetchData(obj.wallet);
    }
  }, []);

  return (
  <React.Fragment>
    <Col xl={3}>
      <Card className="card-height-100">
        <CardHeader className="align-items-center d-flex">
          <h4 className="card-title mb-0 flex-grow-1">Assets Staked</h4>
        </CardHeader>

        <CardBody>
          <div className="table-responsive table-card">
            <table className="table table-centered table-hover align-middle table-nowrap mb-0">
              <tbody>
              {assets.map((item, key) => (
              <tr key={key}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-2">
                      <img src={item.img} alt="" className="avatar-sm p-2" />
                    </div>
                    <div>
                      <h5 className="fs-14 my-1 fw-medium"><Link to="/apps-ecommerce-seller-details" className="text-reset">{item.label}</Link></h5>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0">{item.data.quantity}</p>
                  <span className="text-muted">NFT</span>
                </td>
                <td>
                  <p className="mb-0">$ {item.data.tokens}</p>
                  <span className="text-muted">METAL</span>
                </td>
              </tr>
              ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </Col>

  </React.Fragment>
  );
};

export default AssetStaked;