import Stylesheet from "./index";

const defaultRulesets = [
  ".m_a { margin: auto; }",
  ".fullwidth { width: 100%; }",
];

describe("Stylesheet entity", () => {
  it("should have valid contents", () => {
    const style = Stylesheet.create({ rulesets: defaultRulesets });
    expect(style.toString()).toBe(
      ".m_a { margin: auto; }\n.fullwidth { width: 100%; }\n",
    );
  });

  it("should wrap contents in media query", () => {
    const media = { name: "max-md", query: "screen and (max-width: 700px)" };
    const style = Stylesheet.create({
      rulesets: defaultRulesets,
      media: undefined,
    });

    expect(style.toString()).toBe(
      ".m_a { margin: auto; }\n.fullwidth { width: 100%; }\n",
    );

    style.setMedia(media);
    expect(style.toString()).toBe(
      "@media screen and (max-width: 700px) {\n.m_a { margin: auto; }\n.fullwidth { width: 100%; }\n}\n",
    );
  });

  it("should use default name", () => {
    const factory = Stylesheet.createFactory({
      filename: undefined,
      extension: undefined,
    });
    const style = factory.create({ rulesets: defaultRulesets });
    expect(style.getName()).toBe("rececss.css");
  });

  it("should use factory defined name", () => {
    const full = Stylesheet.createFactory({
      filename: "utils",
      extension: "txt",
    });
    const style = full.create({ rulesets: [] });
    expect(style.getName()).toBe("utils.txt");
  });

  it("should be presented as DTO", () => {
    const style = Stylesheet.create({ rulesets: defaultRulesets });
    expect(style.toDTO()).toEqual({ rulesets: defaultRulesets });

    const media = { name: "max-md", query: "screen and (max-width: 700px)" };
    style.setMedia(media);
    expect(style.toDTO()).toEqual({ rulesets: defaultRulesets, media });
  });
});
