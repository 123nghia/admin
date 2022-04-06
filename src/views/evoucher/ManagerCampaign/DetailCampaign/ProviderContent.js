import React from "react";

function ProviderContent({ detailCampaign }) {
  console.log(detailCampaign);
  return (
    <div className="tabcontent defaultOpen">
      <table className="table table-hover table-outline mb-0 d-none d-sm-table table_dash table-details-campaign">
        <thead></thead>
        <tbody>
          <tr>
            <td className="pl-5">Tên công ty</td>
            <td className="color-red">
              {detailCampaign && detailCampaign.vendor?.[0]
                ? detailCampaign.vendor?.[0].Name
                : ""}
            </td>
          </tr>
          <tr>
            <td className="pl-5">Brand</td>
            <td className="color-red">
              {detailCampaign && detailCampaign.vendor?.[0]
                ? detailCampaign.vendor?.[0].Name
                : ""}
            </td>
          </tr>
          <tr>
            <td className="pl-5">Địa chỉ</td>
            <td className="color-red">
              {detailCampaign && detailCampaign.vendor?.[0]
                ? detailCampaign.vendor?.[0].Address
                : ""}
            </td>
          </tr>
          <tr>
            <td className="pl-5">Email</td>
            <td className="color-red">
              {detailCampaign && detailCampaign.vendor?.[0]
                ? detailCampaign.vendor?.[0].Email
                : ""}
            </td>
          </tr>
          <tr>
            <td className="pl-5">Số điện thoại</td>
            <td className="color-red">
              {detailCampaign && detailCampaign.vendor?.[0]
                ? detailCampaign.vendor?.[0].Phone
                : ""}
            </td>
          </tr>
          <tr>
            <td className="pl-5">Slug - Đường dẫn</td>
            <td className="color-red">
              {detailCampaign && detailCampaign.vendor?.[0]
                ? detailCampaign.vendor?.[0].Slug
                : ""}
            </td>
          </tr>
          <tr>
            <td className="pl-5">Website</td>
            <td className="color-red">
              {detailCampaign && detailCampaign.vendor?.[0]
                ? detailCampaign.vendor?.[0].Website
                : ""}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProviderContent;
