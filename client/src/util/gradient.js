var gradientData = [
  'linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)',
  'linear-gradient(to right, #bc4e9c, #f80759)',
  'linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)',
  'linear-gradient(to right, #3e5151, #decba4)',
  'linear-gradient(to right, #11998e, #38ef7d)',
  'linear-gradient(to right, #108dc7, #ef8e38)',
  'linear-gradient(to right, #fc5c7d, #6a82fb)',
  'linear-gradient(to right, #c94b4b, #4b134f)',
  'linear-gradient(to right, #23074d, #cc5333)',
  'linear-gradient(to right, #fffbd5, #b20a2c)',
  'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
  'linear-gradient(to right, #00b09b, #96c93d)',
  'linear-gradient(to right, #d3cce3, #e9e4f0)',
  'linear-gradient(to right, #3c3b3f, #605c3c)',
  'linear-gradient(to right, #cac531, #f3f9a7)',
  'linear-gradient(to right, #800080, #ffc0cb)',
  'linear-gradient(to right, #00f260, #0575e6)',
  'linear-gradient(to right, #fc4a1a, #f7b733)',
  'linear-gradient(to right, #74ebd5, #acb6e5)',
  'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)'
];

class GradientGenerator {
  constructor(data) {
    this.data = data;
  }

  generateGradient() {
    return this.data[Math.floor(Math.random() * this.data.length)];
  }
}

const gradientGenerator = new GradientGenerator(gradientData);

export default gradientGenerator;