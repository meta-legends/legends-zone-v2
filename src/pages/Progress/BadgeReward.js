import React from 'react';

import SniperBronze from "../../assets/images/metalegends/badge-reward/SniperBronze.png";
import ArmorCyber from "../../assets/images/metalegends/badge-reward/ArmorCyber.png";
import WeaponGoldboi from "../../assets/images/metalegends/badge-reward/WeaponGoldboi.png";
import CyberPet from "../../assets/images/metalegends/badge-reward/CyberPet.png";
import GoldboiCar from "../../assets/images/metalegends/badge-reward/GoldboiCar.png";
import SniperRifleCelestial from "../../assets/images/metalegends/badge-reward/SniperRifleCelestial.png";
import {Card, CardBody, CardHeader, Col} from "reactstrap";
import {Link} from "react-router-dom";

const BadgeReward = () => {

  const Badges = [
    { img: SniperBronze, label: "Rough Sniper" },
    { img: ArmorCyber, label: "Rough Armor" },
    { img: WeaponGoldboi, label: "Goldboi Weapon" },
    { img: CyberPet, label: "Cyber Pet" },
    { img: GoldboiCar, label: "Goldboi Vehicle" },
    { img: SniperRifleCelestial, label: "Celestial Sniper" }
  ];
  
  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className="card-height-100">
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">Badge Rewards</h4>
          </CardHeader>

          <CardBody>
            <div className="table-responsive table-card">
              <table className="table table-centered table-hover align-middle table-nowrap mb-0">
                <tbody>
                {Badges.map((item, key) => (
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
                      <p className="mb-0">0</p>
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
}

export default BadgeReward;