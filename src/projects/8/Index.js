import React from 'react';

const Index = () => {
  const canvasRef = React.useRef(null);

  const [state, setState] = React.useState({
    ctx: null,
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    hue: 0,
  });
  const {isDrawing, ctx, lastX, lastY, hue} = state;

  React.useLayoutEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 50;
    setState((preState) => ({
      ...preState,
      ctx,
    }));
  }, []);

  const isDrawingStart = (e) => {
    setState((preState) => ({
      ...preState,
      isDrawing: true,
      lastX: e.nativeEvent.offsetX,
      lastY: e.nativeEvent.offsetY,
    }));
  }

  const draw = (e) => {
    if(isDrawing) {
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();

      setState((preState) => ({
        ...preState,
        lastX: e.nativeEvent.offsetX,
        lastY: e.nativeEvent.offsetY,
        hue: hue+1 === 360 ? 0 : hue+1,
      }));
    }
  }

  const isDrawingEnd = () => {
    setState((preState) => ({
      ...preState,
      isDrawing: false
    }))
  }

  return (
    <canvas style={{border: "1px solid"}} id="draw" width="800" height="800" ref={canvasRef}
      onMouseDown={(e) => isDrawingStart(e)}
      onMouseMove={(e) => draw(e)}
      onMouseUp={() => isDrawingEnd()}
      onMouseOut={() => isDrawingEnd()}
    />
  );
}

export default Index;