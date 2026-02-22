export interface Plan {
  name: string;
  speed: string;
  price: string;
  popular: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    name: "5MB",
    speed: "5 MB",
    price: "500",
    popular: false,
    features: [
      "Upto 5 Mb/s Internet",
      "Optical Fiber Connection",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
  {
    name: "10MB",
    speed: "10 MB",
    price: "800",
    popular: false,
    features: [
      "Upto 10 Mb/s Internet",
      "Optical Fiber Connection",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
  {
    name: "15MB",
    speed: "15 MB",
    price: "1,000",
    popular: false,
    features: [
      "Upto 15 Mb/s Internet",
      "Optical Fiber Connection",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
  {
    name: "20MB",
    speed: "20 MB",
    price: "1,300",
    popular: false,
    features: [
      "Upto 20 Mb/s Internet",
      "Optical Fiber Connection",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
  {
    name: "25MB",
    speed: "25 MB",
    price: "1,500",
    popular: true,
    features: [
      "Upto 25 Mb/s Internet",
      "Optical Fiber Connection",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
  {
    name: "30MB",
    speed: "30 MB",
    price: "1,700",
    popular: false,
    features: [
      "Upto 30 Mb/s Internet",
      "Optical Fiber Connection",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
  {
    name: "35MB",
    speed: "35 MB",
    price: "2,000",
    popular: false,
    features: [
      "Upto 35 Mb/s Internet",
      "Optical Fiber Connection",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
  {
    name: "40MB",
    speed: "40 MB",
    price: "2,300",
    popular: false,
    features: [
      "Upto 40 Mb/s Internet",
      "Optical Fiber Connection",
      "Free Real IP",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
  {
    name: "50MB",
    speed: "50 MB",
    price: "2,500",
    popular: false,
    features: [
      "Upto 50 Mb/s Internet",
      "Optical Fiber Connection",
      "Free Real IP",
      "Buffer-less Cached Content",
      "Connection Ratio 1:8",
      "24/7 Customer Service",
    ],
  },
];
