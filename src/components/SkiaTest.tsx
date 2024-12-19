import {Canvas, Circle, Group} from "@shopify/react-native-skia";
import {View} from 'react-native';

export function SkiaTest() {
  const size = 256;
  const r = size * 0.33;
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Canvas style={{width: size, height: size}}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={size - r} cy={r} r={r} color="magenta" />
          <Circle cx={size/2} cy={size - r} r={r} color="yellow" />
        </Group>
      </Canvas>
    </View>
  );
} 