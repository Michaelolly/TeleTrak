import React from "react";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
    tension?: number;
  }[];
}

interface ChartProps {
  data: ChartData;
  className?: string;
}

const Chart: React.FC<ChartProps> = ({ data, className = "" }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, width, height);

    // Calculate scales
    const maxValue = Math.max(...data.datasets[0].data);
    const xStep = (width - padding * 2) / (data.labels.length - 1);
    const yScale = (height - padding * 2) / maxValue;

    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw data
    data.datasets.forEach((dataset) => {
      ctx.beginPath();
      ctx.strokeStyle = dataset.borderColor || "#10B981";
      ctx.lineWidth = 2;

      dataset.data.forEach((value, index) => {
        const x = padding + index * xStep;
        const y = height - padding - value * yScale;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();
    });

    // Draw labels
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.font = "12px sans-serif";
    data.labels.forEach((label, index) => {
      const x = padding + index * xStep;
      ctx.fillText(label, x - 20, height - padding + 20);
    });
  }, [data]);

  return <canvas ref={canvasRef} className={className} width="800" height="400" />;
};

export default Chart;
