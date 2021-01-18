import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import Profile from '../../feautures/account/profile';
import WishList from '../../feautures/account/wish-list';
import Cart from '../../feautures/account/cart';
import Orders from '../../feautures/account/orders';
import MainStack from '../main-stack';
import { NavigationContainer, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {faCartArrowDown, faShoppingCart, faHeart, faUser, faEnvelope, faPhone, faShare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Main from '../../feautures/main/main';
import Login from '../../feautures/auth/screens/login/login';
import Registraiton from '../../feautures/auth/screens/registration/registraiton';
import Password from '../../feautures/auth/screens/password/password';
import ProductDetails from '../../feautures/product-details';
import { DARK_GREY, MAIN_BLUE } from '../../assets/constants';
import { TProductDetailsRoute } from '../../models';

const Drawer = createDrawerNavigator();

interface IAccountDrawer {

}

const AccountDrawer: React.FC<IAccountDrawer> = () => {
    const navigation = useNavigation();
    const route:TProductDetailsRoute = useRoute();
    return(
    <Drawer.Navigator drawerContent={() => <CustomDrawerContent />}>
        {/* <Drawer.Screen name="MainStack" component={MainStack} 
                       options={{ drawerLabel: 'Ecommerce store'}}/> */}
        <Drawer.Screen name="Main" component={Main}/>
        <Drawer.Screen name="Profile" component={Profile}/>
        <Drawer.Screen name="WishList" component={WishList}/>
        <Drawer.Screen name="Cart" component={Cart}/>
        <Drawer.Screen name="Orders" component={Orders}/>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Registration" component={Registraiton} />
        <Drawer.Screen name="Password" component={Password} />
        <Drawer.Screen name={route.params?.name ?? "ProductDetails"} component={ProductDetails} />
        
    </Drawer.Navigator>
    )
}

const CustomDrawerContent = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <DrawerContentScrollView >
                <View style={styles.logoBlock}>
                    <Text style={styles.logo}>Ecommerce</Text>
                    <Text style={styles.logo}>Store</Text>
                </View>
                <View>
                    <View>
                        <Text style={styles.title}>Account</Text>
                        <DrawerItem 
                                    icon={() => (<FontAwesomeIcon icon={faUser} size={20} style={styles.icon}/>)}
                                    label="My Profile"
                                    onPress={() => {navigation.navigate('Profile')}}/>
                        <DrawerItem 
                                    icon={() => (<FontAwesomeIcon icon={faHeart} size={20} style={styles.icon}/>)}
                                    label="My Wishlist"
                                    onPress={() => {navigation.navigate('WishList')}}/>
                        <DrawerItem 
                                    icon={() => (<FontAwesomeIcon icon={faShoppingCart} size={20} style={styles.icon}/>)}
                                    label="My Cart"
                                    onPress={() => {navigation.navigate('Cart')}}/>
                        <DrawerItem 
                                    icon={() => (<FontAwesomeIcon icon={faCartArrowDown} size={20} style={styles.icon}/>)}
                                    label="My Orders"
                                    onPress={() => {navigation.navigate('Orders')}}/>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.title}>Support</Text>
                        <DrawerItem 
                                icon={() => (<FontAwesomeIcon icon={faEnvelope} size={20} style={styles.icon}/>)}
                                label="Email"
                                onPress={() => {}}/>
                        <DrawerItem 
                                icon={() => (<FontAwesomeIcon icon={faPhone} size={20} style={styles.icon}/>)}
                                label="Call"
                                onPress={() => {}}/>
                    </View>
                    <View>
                        <Text style={styles.title}>Others</Text>
                        <DrawerItem 
                                    icon={() => (<FontAwesomeIcon icon={faShare} size={20} style={styles.icon}/>)}
                                    label="Others"
                                    onPress={() => {}}/>
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    block: {
        borderColor: DARK_GREY,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    logo: {
        fontSize: 26,
        color: MAIN_BLUE,
        fontWeight: 'bold',
        //fontFamily: 'Montserrat'
    },
    logoBlock: {
        borderColor: MAIN_BLUE,
        borderBottomWidth: 2,
        padding: 30 
    },
    title: {
        fontSize: 18,
        color: DARK_GREY,
        padding: 30,
       // fontFamily: 'Montserrat'
    },
    icon: {
        color: MAIN_BLUE,
    }
})

export default AccountDrawer;

