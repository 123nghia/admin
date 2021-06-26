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
      name: "Pakage Sale",
      url: "/package_sale",
      icon: "icon-eyeglass",
    },
    {
      name: "Package Sale Log",
      url: "/package_sale_log",
      icon: "icon-eyeglass",
    },
    {
      name: "Role",
      url: "/role",
      icon: "icon-user-following",
    },
    {
      name: "Key",
      url: "/key",
      icon: "icon-key",
    },
    {
      name: "Type Key",
      url: "/type_key",
      icon: "icon-key",
    },
    {
      name: "Key Order",
      url: "/key_order",
      icon: "icon-key",
    }
  ],
};
