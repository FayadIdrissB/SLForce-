import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Feather, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../../../../components/button/button';
import styleCard from './styles';
import Card from '../../../../components/card/app';

export default function SecurPage() {
    
    const securityStyles = styleCard()

    return (
        <ScrollView style={{ padding: 10 }}>

            {/* Change password card */}
            <Card  label='CHANGER DE MOT DE PASSE' style={securityStyles.containers_rows}>

                <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Card style={[securityStyles.iconContainer, securityStyles.shadow]}>
                        <AntDesign name="lock" size={24} color="white" />
                    </Card>
                    <Card style={[securityStyles.container]}>
                        <Text style={securityStyles.title}>Changer de mot de passe</Text>
                        <Text style={securityStyles.subtitle}>Dernière modification: il y a 2 jours</Text>
                    </Card>
                </Card>

                <TouchableOpacity>
                    <Card style={{ padding: 10 }}>
                        <AntDesign name="arrow-right" size={24} color="gray" />
                    </Card>
                </TouchableOpacity>
            </Card>

            {/* Authentication 2FA card */}
            <Card label='AUTHENTIFICATION 2FA' style={securityStyles.containers_rows}>

                <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Card style={[securityStyles.iconContainer, securityStyles.shadow]}>
                        <MaterialCommunityIcons name="two-factor-authentication" size={24} color="white" />
                    </Card>
                    <Card style={[securityStyles.container]}>
                        <Text style={securityStyles.title}>Authentification 2FA</Text>
                        <Text style={securityStyles.subtitle}>Désactivé</Text>
                    </Card>
                </Card>

                {/* Checkbox */}
                <TouchableOpacity>
                    <Card >
                        <BouncyCheckbox size={25}
                            iconStyle={{ borderColor: "red" }}
                            onPress={(isChecked: boolean) => { console.log(isChecked) }} />
                    </Card>
                </TouchableOpacity>
            </Card>

            {/* Authentication Touch ID/Face ID card*/}
            <Card label='AUTHENTIFICATION BIOMÉTRIQUE' style={securityStyles.containers_rows}>

                <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Card style={[securityStyles.iconContainer, securityStyles.shadow]}>
                        <AntDesign name="lock" size={24} color="white" />
                    </Card>
                    <Card style={securityStyles.container}>
                        <Text style={securityStyles.title}>Touch ID / Face ID</Text>
                        <Text style={securityStyles.subtitle}>Utiliser pour te connecter</Text>
                    </Card>
                </Card>

                {/* Checkbox */}
                <TouchableOpacity>
                    <Card >
                        <BouncyCheckbox size={25}
                            iconStyle={{ borderColor: "red" }}
                            onPress={(isChecked: boolean) => { console.log(isChecked) }} />
                    </Card>
                </TouchableOpacity>
            </Card>

            {/* Session activity card */}
            <Card label='SESSIONS ACTIVIVES' style={[securityStyles.container_column]}>

                <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Card style={[securityStyles.iconContainer, securityStyles.shadow, { backgroundColor: "#0fd108" }]}>
                        <Feather name="smartphone" size={24} color="white" />
                    </Card>
                    <Card style={[securityStyles.container, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 }]}>
                        <View >
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <Text style={securityStyles.title}>Iphone 14 Pro</Text>
                                <Text style={[securityStyles.session_is_active] }>Active</Text>
                            </View>
                            <Text style={securityStyles.subtitle}>Villeurbranne, France - Maintenant</Text>
                        </View>
                    </Card>
                </Card>

                <Card style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Card style={[securityStyles.iconContainer, securityStyles.shadow, { backgroundColor: "gray" }]}>
                        <Fontisto name="world-o" size={24} color="white" />
                    </Card>
                    <Card style={[securityStyles.container, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 }]}>
                        <View>
                            <Text style={securityStyles.title}>Chrome - Windows</Text>
                            <Text style={securityStyles.subtitle}>Villeurbranne, France - Maintenant</Text>
                        </View>
                        <TouchableOpacity style={{ padding: 5 }} onPress={() => { console.log("Deconnecté") }}>
                            <Text style={{ color: "red" }}>Deconnecté</Text>
                        </TouchableOpacity>
                    </Card>
                </Card>
            </Card>

            {/* Security actions card */}
            <Card label='ACTIONS DE SECURITE' style={[securityStyles.securityActions_deconnect]}>

                <TouchableOpacity onPress={() => { console.log("Deconnecté") }}>
                    <Button title="Deconnecté tous les appareils" onPress={() => { console.log("Deconnecté") }} style={{ borderRadius: 5, padding: 5, flexDirection: 'row', alignItems: 'center',justifyContent: 'center', gap: 10, width: "100%" }} textColor="black" >
                        <AntDesign name="logout" size={24} color="black" />
                    </Button>
                </TouchableOpacity>

            </Card>


            <Card style={[securityStyles.securityActions_signal_problem]}>

                <TouchableOpacity onPress={() => { console.log("Deconnecté") }}>
                    <Button title="Signaler un probleme de securrité" onPress={() => { console.log("Deconnecté") }} style={{ borderRadius: 5, padding: 5, flexDirection: 'row', alignItems: 'center',justifyContent: 'center', gap: 10, width: "100%" }} textColor="white" >
                        <AntDesign name="warning" size={24} color="white" />
                    </Button>
                </TouchableOpacity>

            </Card>
        </ScrollView>
    )
}