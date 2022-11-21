import { Component, createRef, jsx, Ref, AnimationProps } from '@antv/f-engine';
import { loadAnimation } from '@antv/g-lottie-player';

interface LottieProps {
  // Lottie Json
  data: any;
  options: {
    // 是否循环播放 次数 ｜ 无限
    loop: number | boolean;
    // 是否自动播放
    autoplay: boolean;
  };
  style?: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
  animation?: AnimationProps;
}

class Lottie extends Component<LottieProps> {
  size: { width: number; height: number };
  ref: Ref;

  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  didMount() {
    const { props, context } = this;
    const { data, options } = props;
    const { canvas } = context;

    // 文档流后挂载lottie
    canvas.ready.then(() => {
      const animation = loadAnimation(data, options);
      animation.render(this.ref.current);

      this.size = animation.size();
      this.updateSize();
    });
  }

  willUpdate() {
    const { context } = this;
    const { canvas } = context;
    canvas.ready.then(() => {
      this.updateSize();
    });
  }

  updateSize = () => {
    const { width: currentWidth, height: currentHeight } = this.size;
    const { style } = this.props;
    if (!style) return;

    const { width = currentWidth, height = currentHeight } = style;

    this.ref.current.scale(width / currentWidth, height / currentHeight);
    this.size = {
      width,
      height,
    };
  };

  render() {
    const { style, animation } = this.props;
    return <group ref={this.ref} style={style} animation={animation}></group>;
  }
}

export default Lottie;
