import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useCallback, useEffect, forwardRef, useImperativeHandle } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Button } from '@ui-kitten/components'
const { height: SCREEN_HEIGHT } = Dimensions.get('window')
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50

const BottomSheet = (props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      scrollTo
    }
  }, [scrollTo])
  const scrollTo = useCallback((destination) => {
    translateY.value = withSpring(destination, { damping: 50 })
  }, [])
  const translateY = useSharedValue(0)
  
  const context = useSharedValue({ y: 0 })
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value }
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT/3) {
        scrollTo(0)
      } else if (translateY.value > -SCREEN_HEIGHT/1.5) {
        scrollTo(MAX_TRANSLATE_Y)
      }
    })
  useEffect(() => {
    scrollTo(-SCREEN_HEIGHT/3)
  }, [])
  const rBootomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }]
    }
  })
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBootomSheetStyle]} >
        <View style={styles.line} />
        <Button onPress={() => scrollTo(10)} >close</Button>
      </Animated.View>
    </GestureDetector>
  )
}

export default forwardRef(BottomSheet)

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: '#fdfdfd',
    borderRadius: 25,
    top: SCREEN_HEIGHT,
  },
  line: {
    width: 75,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#7e7e7e',
    alignSelf: 'center',
    marginVertical: 10,
  }
})