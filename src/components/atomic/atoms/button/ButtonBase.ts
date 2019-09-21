import {Component, Emit, Prop, Vue} from "vue-property-decorator";

@Component
export default class ButtonBase extends Vue {
    @Prop() public type?: string;

    @Emit("click")
    public onClick() {}
}