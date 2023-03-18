import pillow_pic from "@assets/products/memory_foam.jpg";
import power_bank1 from "@assets/products/power_bank1.jpg";
import power_bank2 from "@assets/products/power_bank2.jpg";
import power_bank3 from "@assets/products/power_bank3.jpg";
import power_bank4 from "@assets/products/power_bank4.jpg";

export const products = [
  {
    title: `Pharmedoc Cooling Memory Foam Pillows, 1 Pack, Ventilated Lilac Dreamer Bed Pillow, Reading and Bed Rest Pillows, Standard, Back Sleeper and Side Sleeper Support, Sleeping Pillows for Adults`,
    avg_rating: 4,
    ratings: 1800,
    pictures: [pillow_pic],
    price: 23.99,
    discount: 40,
    shipping_price: 200,
    quantity: 30,
    category: {
      name: "Health and household",
      _id: "health-and-household",
    },
    details: [
      { name: "fill material", desc: "memory foam" },
      { name: "Pillow Type", desc: "Bed Pillow" },
      { name: "Color", desc: "	Lilac Dreamer" },
      { name: "Size", desc: "1 pack" },
      { name: "Brand", desc: "Pharmedoc" },
    ],
    _id: 'sldn8912hj',
    about: `😴[Upgrade Your Sleep] - Experience the next level of comfort while you sleep with the Lilac Dreamer cooling pillow. This firm sleeping pillow is designed to keep you cool through the night by allowing air to pass through the holes in the pillow.
    ❄️[Cooler Nights] - Advanced Cooling Technology: We combined the design of breathable holes to allow air to flow through the pillow with the power of infusing the pillow with cooling powder to keep you colder through the night.
    🛌[Better Nights] - Perfect for all sleepers, and anyone with back pain or neck pain. Cooling memory foam gives you a firmer support than normal pillows while still being soft and comfortable.
    👍[Ergonomic Height] - It provides neck and spine support to side and back sleepers. High quality memory foam does not lose its form like regular pillows, giving you the same support for longer. Pillow dimensions are 24 x 16.5 x 5 inches.
    😊[Free Cover] - We included a removable and machine washable cover for easy clean-up. Made of premium fabric that allows the cool feeling of the pillow to flow through.`,
  },
  {
    title: `mophie Powerstation Ultra Power Bank, 30,000mAh Portable Battery Charger with 3 Outputs External Battery Pack Cell Phone Charger Compatible with iPhone, Galaxy, iPad and More, Terra`,
    avg_rating: 0,
    ratings: 0,
    pictures: [power_bank1, power_bank2, power_bank3, power_bank4],
    price: 39.95,
    _id: 'asdjkljasd893',
    discount: 0,
    shipping_price: 96.23,
    quantity: 20,
    category: {
      name: "electronic",
      _id: "electronic",
    },
    details: [
      { name: "Connector Type", desc: "	USB Type A" },
      { name: "Brand", desc: "Mophie" },
      { name: "Battery Capacity", desc: "30000 Milliamp Hours" },
      { name: "Color", desc: "Terra" },
      { name: "Special Feature", desc: "Fast Charging" },
    ],
    about: `😴Contains a 30,000mAh internal battery: the battery cells hold their charge so you can use it when you need it most.
    Up to 3 full charges for your cell phone: Gives you enough power to charge your cell phone several times, without worrying about the red battery signal appearing.
    Charge multiple devices at once: Charge three devices simultaneously using the USB-A ports and USB-C port.`,
  },
];
