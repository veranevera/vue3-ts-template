import HelloWorld from "../components/HelloWorld.vue";

export default {
  title: "Intro/Welcome",
  component: HelloWorld,
  argTypes: {
    msg: { control: "text" },
  },
};

const Template = (args: object) => ({
  components: { HelloWorld },
  setup() {
    return { args };
  },
  template: '<hello-world v-bind="args" />',
});

export const Hello = Template.bind({});
Hello.args = {
  msg: "Test",
};
