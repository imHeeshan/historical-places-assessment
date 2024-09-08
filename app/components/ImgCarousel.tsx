// /* eslint-disable react-native/no-inline-styles */
// import { Alert, Image, StyleSheet, Text, View } from 'react-native';
// import React, { FC, useRef, useState } from 'react';
// import Carousel from 'react-native-snap-carousel';
// import { SCREEN_WIDTH } from '@app/utils/Dimension';


// const ImgCarousel: FC<ICarouselProps> = ({
//   imgData,
//   currentIndex,
//   setCurrentIndex,
//   rightComponentType,
//   leftComponentType,
//   leftTxt,
//   rightTxt,
//   leftComponetTxtType,
//   RightOnPressFn,
//   rightIcon,
//   rightComponetTxtType,
//   leftIcon,
//   LeftOnPressFn,
//   isShowLeft,
//   isShowRight,
//   isTagNotation,
//   isShopDetails,
//   isCarousel = true,
// }) => {
//   const [isTag, setIsTag] = useState(false);
//   const carouselRef = useRef();

//   const renderItem = ({ item }) => {
//     console.log(item);
//     return (
//       <View>
//         <Image
//           source={item}
//           style={
//             isShopDetails
//               ? { width: SCREEN_WIDTH }
//               : GlobalStyles.carosulePostImage
//           }
//         />
//         {isTagNotation && (
//           <View
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 zIndex: 11,
//                 top: -20,
//               }}>
//               <UseTouchableIcon
//                 icon={
//                   <IconGen
//                     name={'circle'}
//                     type="fontAwesome"
//                     size={20}
//                     color={colors.whiteOpacity}
//                   />
//                 }
//                 onPressFn={() => setIsTag(!isTag)}
//               />
//             </View>
//             {isTag && (
//               <View
//                 style={{
//                   position: 'absolute',
//                   top: 90,
//                   bottom: 0,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   left: SCREEN_WIDTH / 2 - 7,
//                 }}>
//                 <Tooltip />
//               </View>
//             )}
//           </View>
//         )}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.mainCarousel}>
//       {isCarousel ? (
//         <Carousel
//           ref={carouselRef}
//           data={imgData}
//           renderItem={renderItem}
//           sliderWidth={SCREEN_WIDTH}
//           itemWidth={SCREEN_WIDTH}
//           onSnapToItem={index => setCurrentIndex(index)}
//           pagingEnabled
//           loop
//         />
//       ) : (
//         renderItem({ item: imgData[0] })
//       )}
//       {imgData.length > 1 && (
//         <CarouselPagination currentIndex={currentIndex} imgData={imgData} />
//       )}
//       <View style={[GlobalStyles.imageTopTag, { width: SCREEN_WIDTH }]}>
//         {leftComponentType === 'txt' ? (
//           <CarouselImgTop.CarouselTxtOverlay
//             customStyle={{
//               opacity: !isShowLeft ? (imgData.length > 1 ? 1 : 0) : 1,
//               height: 28,
//             }}
//             text={
//               leftComponetTxtType === 'count'
//                 ? currentIndex + 1 + ' / ' + imgData.length
//                 : leftTxt
//             }
//           />
//         ) : (
//           leftComponentType === 'icon' && (
//             <CarouselImgTop.CarouselTxtWithIconOverlay
//               customStyle={{
//                 opacity: !isShowLeft ? (imgData.length > 1 ? 1 : 0) : 1,
//                 height: 28,
//               }}
//               onPressFn={LeftOnPressFn}
//               count={leftTxt}
//               icon={leftIcon}
//             />
//           )
//         )}
//         {leftComponentType === undefined && <View />}
//         {rightComponentType === 'txt' ? (
//           <CarouselImgTop.CarouselTxtOverlay
//             customStyle={{
//               opacity: !isShowRight ? (imgData.length > 1 ? 1 : 0) : 1,
//               height: 28,
//             }}
//             text={
//               rightComponetTxtType === 'count'
//                 ? currentIndex + 1 + ' / ' + imgData.length
//                 : rightTxt
//             }
//           />
//         ) : (
//           rightComponentType === 'icon' && (
//             <CarouselImgTop.CarouselTxtWithIconOverlay
//               customStyle={{
//                 opacity: !isShowRight ? (imgData.length > 1 ? 1 : 0) : 1,
//                 height: 28,
//               }}
//               onPressFn={RightOnPressFn}
//               count={rightTxt}
//               icon={rightIcon}
//             />
//           )
//         )}
//       </View>
//     </View>
//   );
// };

// export default ImgCarousel;

// const styles = StyleSheet.create({
//   mainCarousel: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   postMain: {
//     marginVertical: 8,
//   },
//   imageTooltipBubble: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   postUserDetailsSection: {
//     // height: 88,
//     marginHorizontal: 16,
//     marginVertical: 12,
//     flexDirection: 'row',
//     // backgroundColor:'red'
//   },
//   postActionSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderTopColor: colors.Neutrals[100],
//     borderTopWidth: 1,
//   },
//   postFooter: {
//     backgroundColor: '#fff',
//     borderBottomRightRadius: 10,
//     borderBottomLeftRadius: 10,
//   },
//   sendIcon: {
//     transform: [{ rotate: '45deg' }],
//     marginRight: 10,
//   },
//   carouselPaginationDot: {
//     height: 4,
//     width: 4,
//     marginVertical: 4,
//     marginHorizontal: 2,
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   carouselPagination: {
//     justifyContent: 'center',
//     position: 'absolute',
//     flexDirection: 'row',
//     bottom: 20,
//     backgroundColor: colors.whiteOpacity,
//     borderRadius: 20,
//     alignItems: 'center',
//   },
// });
