import { Params } from '@fortawesome/fontawesome-svg-core';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {TextInput, View, StyleSheet, Image, Text, ScrollView, StatusBar, SafeAreaView, Dimensions} from 'react-native';
import { useDispatch } from 'react-redux';
import { LIGHT_GREY, MAIN_BLUE, WHITE } from '../../assets/constants';
import { TProductDetailsRoute } from '../../models';
import { fetchSingleProduct } from '../../services/categories/actions';
import AddToCartBtn from './components/add-to-cart-btn';
import Header from './components/header';
import WishListBtn from './components/wish-list-btn';

interface IProductDetails {

}

const deviceHeight = Dimensions.get("window").height
const ProductDetails:React.FC<IProductDetails> = () => {
    const navigation = useNavigation();
    const route:TProductDetailsRoute = useRoute()
    const  id  = route.params?.id
    const dispatch = useDispatch();
    useEffect(() =>  {
        dispatch(fetchSingleProduct(id))
    }, [])
    return (
        <>
        <StatusBar backgroundColor={MAIN_BLUE}/>
        <Header />
        <SafeAreaView style={styles.root}>
            <ScrollView style={styles.scroll}>
                <View style={styles.main}>
                    <View style={styles.mainBlock}>
                        <View style={styles.imgContainer}>
                            <Image style={styles.img} 
                                source={{
                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-7rAteXuBBupDq-Tq2OPcCt-EcfGi8wQIHZ_l557L9dELVw7_f77Od6myw&usqp=CAc'
                                        }}/>
                        </View>

                        <View style={styles.stockContainer}>
                            <Text style={styles.stockText}>Instock</Text>
                        </View>
                        <View>
                            <Text style={styles.name}>ProductName</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <View style={styles.priceBlock}><Text style={styles.priceWithDiscount}>$222</Text></View>
                            <View style={styles.priceBlock}><Text style={styles.price}>$244</Text></View>
                            <View style={styles.priceBlock}><Text style={styles.discount}>9% off</Text></View>
                        </View>
                    </View>
                    <View style={styles.selectBlock}>
                        <Text style={styles.title}>Select color:</Text>
                        <View style={styles.selectBtn}>
                            <Text style={styles.selectBtnTxt}>Blue</Text>
                        </View>
                    </View>
                    <View style={styles.descriptionBlock}>
                        <Text style={styles.title}>Description:</Text>
                        <Text style={styles.descriptionText}>Description Description Description DescriptionD escription Description Description Description DescriptionD escription</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <WishListBtn/>
                        <AddToCartBtn/>
                    </View>
                </View>
                </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default ProductDetails;

const styles = StyleSheet.create({
    root: {
        backgroundColor: LIGHT_GREY,
    },
    scroll: {
        minHeight: deviceHeight,
    },
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
    },
    img: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    stockContainer: {
        padding: 8,
        marginRight: 16,
        backgroundColor: MAIN_BLUE,
        width: 70,
        alignSelf: 'flex-end'
    },
    stockText: {
        color: WHITE,
        fontSize: 12,
        alignSelf: 'center'
    },
    name: {
        fontSize: 24,
        marginTop: 16,
        marginLeft: 8,
    },
    priceContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginLeft: 16,
    },
    priceBlock: {
        paddingRight: 4,
        justifyContent: 'flex-end'
    },
    price: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        
    },
    priceWithDiscount: {
        fontSize: 16,
    },
    discount: {
        fontSize: 14,
        color: MAIN_BLUE,
    },
    title: {
        fontSize: 20,
        color: MAIN_BLUE,
        marginVertical: 16,
        marginLeft: 16,
        fontWeight: 'bold',
    },
    btnContainer: {
        flexDirection: 'row',
        height: 40,
        flex: 1,
        alignSelf: 'flex-end',
    },
    mainBlock: {
        marginBottom: 8,
        paddingVertical: 16,
        backgroundColor: WHITE,
        flex:  2,
    },
    descriptionBlock: {
        marginTop: 8,
        paddingVertical: 16,
        backgroundColor: WHITE,
        flex: 2,
        flexGrow: 1,
    },
    descriptionText: {
        marginLeft: 16,
    },
    selectBlock: {
        paddingVertical: 16,
        backgroundColor: WHITE,
        flex: 1,
    },
    selectBtn: {
        padding: 5,
        backgroundColor: MAIN_BLUE,
        width: 50,
        marginLeft: 16,
    },
    selectBtnTxt: {
        textTransform: 'uppercase',
        color: WHITE,
        fontSize: 16,
        
    }
})