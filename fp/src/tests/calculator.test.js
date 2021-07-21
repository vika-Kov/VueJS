import { expect, it } from "@jest/globals";
import { mount } from "@vue/test-utils";
import Calculator from "../components/Calculator";

describe("Calculator test", () => {
  it("Test operand1 input value", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[placeholder=operand1]");
    operand1Input.setValue("1");

    expect(wrapper.vm.operand1).toBe(1);
  });

  it("Test operand2 input value", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[placeholder=operand2]");
    operand1Input.setValue("2");

    // operand1Input.element.value = '1'
    // operand1Input.trigger('input')

    expect(wrapper.vm.operand2).toBe(2);
  });

  //test operands
  it("Test button + press", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[placeholder=operand1]");
    operand1Input.setValue("2");

    const operand2Input = wrapper.find("input[placeholder=operand2]");
    operand2Input.setValue("4");

    const sumOperationBtn = wrapper.find('button[title="+"]');
    sumOperationBtn.trigger("click");

    expect(wrapper.vm.result).toBe(6);
  });
  it("Test button - press", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[placeholder=operand1]");
    operand1Input.setValue("2");

    const operand2Input = wrapper.find("input[placeholder=operand2]");
    operand2Input.setValue("4");

    const sumOperationBtn = wrapper.find('button[title="-"]');
    sumOperationBtn.trigger("click");

    expect(wrapper.vm.result).toBe(-2);
  });
  it("Test button * press", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[placeholder=operand1]");
    operand1Input.setValue("2");

    const operand2Input = wrapper.find("input[placeholder=operand2]");
    operand2Input.setValue("4");

    const sumOperationBtn = wrapper.find('button[title="*"]');
    sumOperationBtn.trigger("click");

    expect(wrapper.vm.result).toBe(8);
  });
  it("Test button / press", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[placeholder=operand1]");
    operand1Input.setValue("8");

    const operand2Input = wrapper.find("input[placeholder=operand2]");
    operand2Input.setValue("2");

    const sumOperationBtn = wrapper.find('button[title="/"]');
    sumOperationBtn.trigger("click");

    expect(wrapper.vm.result).toBe(4);
  });
});

describe("Calculator test methods", () => {
  it("Test sum operation", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[placeholder=operand1]");
    operand1Input.setValue("100");

    const operand2Input = wrapper.find("input[placeholder=operand2]");
    operand2Input.setValue("100");

    const sumOperationBtn = wrapper.find('button[title="+"]');
    sumOperationBtn.trigger("click");

    expect(wrapper.vm.result).toBe(200);
  });

  it("Test div operation", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[placeholder=operand1]");
    operand1Input.setValue("4");

    const operand2Input = wrapper.find("input[placeholder=operand2]");
    operand2Input.setValue("2");

    const sumOperationBtn = wrapper.find('button[title="/"]');
    sumOperationBtn.trigger("click");

    expect(wrapper.vm.result).toBe(2);
  });

  //test substract
  it("Test subtract operation", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[placeholder=operand1]");
    operand1Input.setValue("10");

    const operand2Input = wrapper.find("input[placeholder=operand2]");
    operand2Input.setValue("5");

    const sumOperationBtn = wrapper.find('button[title="-"]');
    sumOperationBtn.trigger("click");

    expect(wrapper.vm.result).toBe(5);
  });
  //test mult
  it("Test mult operation", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[placeholder=operand1]");
    operand1Input.setValue("3");

    const operand2Input = wrapper.find("input[placeholder=operand2]");
    operand2Input.setValue("4");

    const sumOperationBtn = wrapper.find('button[title="*"]');
    sumOperationBtn.trigger("click");

    expect(wrapper.vm.result).toBe(12);
  });
});

describe("Calculator screen keyboard buttons ", () => {
  it("Test button btn1", async () => {
    const wrapper = mount(Calculator);

    const keyboardBtn = wrapper.find('button[title="btn1"]');
    console.log(keyboardBtn);
    keyboardBtn.trigger("click");

    expect(wrapper.vm.operand1).toBe(1);
  });

  //другие кнопки СДЕЛАТЬ
});
