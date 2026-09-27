/**
 * SHREE VINAYAK INDUSTRIES — Master Data Model
 * Pune, Maharashtra, India
 */

export const COMPANY = {
  name: "SHREE VINAYAK INDUSTRIES",
  tagline: "Industrial electronics / power supplies & Industrial Manufacturing",
  established: 2004,
  yearsInOperation: "22+",
  proprietor: "Management Team & Works Director",
  gst: "27AAACG1092F1ZK",
  phoneDisplay: "+91 98824 92359",
  phoneRaw: "+919882492359",
  waNumber: "919882492359",
  email: "contact@shreevinayakindust.in",
  address: "22/1, Hadapsar Industrial Estate, Pune 411013",
  addressShort: "Pune, Maharashtra",
  coordinates: "18.5204\u00b0 N, 73.8567\u00b0 E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "25+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "shree-vinayak-industries-plc-scada-panel",
    "code": "AUT-01",
    "name": "Custom PLC & SCADA Industrial Automation Control Panels",
    "category": "Automation Panels",
    "spec": "Engineered control panels featuring Siemens/Schneider PLCs, integrated touchscreen HMIs, and robust IP65 enclosures.",
    "specsList": [
      {
        "label": "PLC Architecture",
        "val": "Siemens S7-1200 / Schneider Modicon"
      },
      {
        "label": "HMI Display",
        "val": "7-inch to 15-inch Color Capacitive"
      },
      {
        "label": "Ingress Protection",
        "val": "IP55 / IP65 Powder Coated Enclosure"
      },
      {
        "label": "Testing & QA",
        "val": "100% Loop Check & FAT Simulation"
      }
    ],
    "price": "\u20b91,85,000",
    "priceUnit": "/ panel"
  },
  {
    "id": "shree-vinayak-industries-vfd-mcc-panels",
    "code": "AUT-02",
    "name": "Heavy Duty VFD & MCC Motor Control Center Panels",
    "category": "Power Distribution",
    "spec": "Harmonic-filtered Variable Frequency Drive panels for multi-motor industrial conveyors, pumps, and process compressors.",
    "specsList": [
      {
        "label": "Drive Capacity",
        "val": "5.5 kW to 315 kW AC Drives"
      },
      {
        "label": "Busbar Rating",
        "val": "High Conductivity Tinned Copper 1000A"
      },
      {
        "label": "Short Circuit Withstand",
        "val": "50 kA for 1 Second"
      },
      {
        "label": "Protection",
        "val": "Thermal Overload & Phase Asymmetry"
      }
    ],
    "price": "\u20b91,20,000",
    "priceUnit": "/ panel"
  },
  {
    "id": "shree-vinayak-industries-instrumentation-cables",
    "code": "AUT-03",
    "name": "Industrial Sensors, Thermocouples & Signal Transmitters",
    "category": "Process Instrumentation",
    "spec": "High-accuracy RTD/thermocouple temperature sensors, 4-20mA pressure transmitters, and shielded data transmission cables.",
    "specsList": [
      {
        "label": "Sensor Calibration",
        "val": "Class A PT100 / Type K Thermocouple"
      },
      {
        "label": "Temperature Range",
        "val": "-50\u00b0C to +1200\u00b0C"
      },
      {
        "label": "Signal Output",
        "val": "4-20 mA Two-Wire / RS485 Modbus"
      },
      {
        "label": "Certification",
        "val": "NABL Traceable Calibration Certificates"
      }
    ],
    "price": "\u20b94,500",
    "priceUnit": "/ unit"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}
