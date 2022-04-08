import React from "react";

function ProviderContent({ detailCampaign }) {
  console.log(detailCampaign);
  return (
    <div className="tabcontent defaultOpen">
      <table className="table table-hover table-outline mb-0 d-none d-sm-table table_dash table-details-campaign">
        <thead></thead>
        <tbody>
          <tr>
            <td className="pl-5">Tên nhà cung cấp:</td>
            <td>
              {detailCampaign && detailCampaign?.vendor?.[0]
                ? detailCampaign?.vendor?.[0].Name
                : ""}
            </td>
          </tr>
          <tr>
            <td className="pl-5">Thương hiệu:</td>
            <td>
              {detailCampaign && detailCampaign?.vendor?.[0]
                ? detailCampaign?.vendor?.[0].Name
                : ""}
            </td>
          </tr>
          <tr>
            <td className="pl-5">Địa chỉ:</td>
            <td>
              {detailCampaign && detailCampaign?.vendor?.[0]
                ? detailCampaign?.vendor?.[0].Address
                : ""}
            </td>
          </tr>
          <tr>
            {detailCampaign?.vendor?.[0]?.Email && (
              <>
                <td className="pl-5">Email:</td>
                <td>{detailCampaign?.vendor?.[0].Email}</td>
              </>
            )}
          </tr>
          <tr>
            <td className="pl-5">Số điện thoại:</td>
            <td>
              {detailCampaign && detailCampaign?.vendor?.[0]
                ? detailCampaign?.vendor?.[0].Phone
                : ""}
            </td>
          </tr>
          <tr>
            <td className="pl-5">Slug - Đường dẫn:</td>
            <td>
              {detailCampaign && detailCampaign?.vendor?.[0]
                ? detailCampaign?.vendor?.[0].Slug
                : ""}
            </td>
          </tr>
          <tr>
            {detailCampaign?.vendor?.[0]?.Website && (
              <>
                <td className="pl-5">Website:</td>
                <td>{detailCampaign?.vendor?.[0].Website}</td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProviderContent;
