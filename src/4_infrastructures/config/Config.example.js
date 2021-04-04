
module.exports = {
  output: {
    path: "",
    splitByMedia: true,
  },
  rules: {
    // prettier-ignore
    width: {
      named: { full: "100%", half: "50%" },
      units: { px: [[0, 50, 5], [100, 1000, 100]], "%": [[0, 100, 10]] },
    },
    height: {
      named: { full: "100%", half: "50%" },
      units: { px: [300], vh: [50, 100] },
    },
    padding: {
      shorthand: { a: "auto", "1em": "1em", "2em": "2em" },
      edges: {
        named: { sm: "10px", md: "15px", lg: "30px", xl: "50px" },
        units: { px: [[0, 50, 5]], em: [3, 1.3], "%": [] },
      },
    },
    margin: {
      shorthand: { a: "auto", "0a": "0 auto", "1em": "1em", "2em": "2em", "3em": "3em", "4em": "4em", "5em": "5em"},
      edges: {
        named: { sm: "10px", md: "15px", lg: "30px", xl: "50px" },
        units: { px: [[0, 50, 5]] },
      },
    },
    offset: {
      named: { xs: "5px", sm: "10px", md: "15px", lg: "30px", xl: "50px" },
      units: { px: [[0, 100, 5]] },
    },
    flex: {
      shorthand: {
        named: { "00a": "0 0 auto", norm: "1" },
        values: [[1, 10, 1]],
      },
      basis: {
        named: { xs: "8px", sm: "12px", md: "16px" },
        units: { px: [[8, 16, 2]], "%": [[0, 100, 20]] },
      },
      grow: {
        named: {},
        values: [1, 2, 4],
      },
      shrink: {
        named: {},
        values: [1, 3],
      },
      order: {
        named: {},
        values: [1, -1],
      },
    },
    font: {
      shorthand: {
        primary: "italic bold .8em/1.2 Arial, sans-serif",
      },
      size: {
        named: { xs: "8px", sm: "12px", md: "16px" },
        units: { px: [[8, 16, 2]] },
      },
      family: {
        primary: "Arial, serif",
        secondary: "Helvetica, sans-serif",
      },
    },
    border: {
      shorthand: { thin: "1px solid black", bold: "5px solid black" },
      radius: {
        named: { circle: "50%" },
        units: { px: [5, 10] },
      },
    },
    color: {
      dark: "#000",
      light: "#fff",
    },
  },
}
