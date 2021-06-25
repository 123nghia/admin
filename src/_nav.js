export default {
  items: [
    {
      title: true,
      name: "Menu",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "", // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "UserAdmin",
      url: "/user_admin",
      icon: "icon-user",
    },
    {
      name: "Company",
      url: "/company",
      icon: "icon-location-pin"

    },
    {
      name: "PakageSale",
      url: "/package_sale",
      icon: "icon-eyeglass",
    },
    {
      name: "Package Sale Log",
      url: "",
      icon: "icon-eyeglass",
    },
    {
      name: "Role",
      url: "",
      icon: "icon-user-following",
    },
    {
      name: "Key",
      url: "",
      icon: "icon-key",
    },
    {
      name: "Type Key",
      url: "",
      icon: "icon-key",
    },
    {
      name: "Key Order",
      url: "",
      icon: "icon-key",
    }
  ],
};
