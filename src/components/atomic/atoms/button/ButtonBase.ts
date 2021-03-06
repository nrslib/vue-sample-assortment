import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {RawLocation} from "vue-router";

@Component
export default class ButtonBase extends Vue {
    @Prop() public type?: string;

    @Prop() public to?: RawLocation;

    @Prop() public disabled?: boolean;

    @Emit("click")
    public onClick() {}
}