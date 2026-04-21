import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Modal,
  StyleSheet,
} from 'react-native';
import data from '../data.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../constants/colors';
import { STRINGS } from '../constants/strings';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('Profile');
  const [activeMenu, setActiveMenu] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const slideAnim = React.useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    if (menuOpen) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setMenuOpen(false));
    } else {
      setMenuOpen(true);
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const openImage = img => {
    setSelectedImage(img);
    setVisible(true);
  };

  const profileFields = [
    { label: 'Trainee ID', value: data.TraineeID },
    { label: 'Name of training programme', value: data.trainingName },
    { label: 'Course duration', value: data.CourseDuration },
    { label: 'Aadhaar No', value: data.Aadhaar },
    { label: "Father's Name", value: data.FatherName },
    { label: 'GPF/PRAN', value: data.GPFPRAN },
    { label: 'PAN No.', value: data.PAN },
    { label: 'Select Marital status', value: data.MaritalStatus },
    { label: 'Select Gender', value: data.Gender },
    { label: 'Personal Email', value: data.PersonalEmail },
    { label: 'Office Email', value: data.OfficeEmail },
    { label: 'Designation', value: data.Designation },
    { label: 'Mobile No.', value: data.Mobile },
    {
      label: 'Highest Educational Qualification',
      value: data.HighestEducational,
    },
    { label: 'Stream', value: data.Stream },
    { label: 'University Name', value: data.UniversityName },
    { label: 'Passing Year', value: data.PassingYear },
    { label: 'Certificate No.', value: data.CertificateNo },
    { label: 'Office Address', value: data.OfficeAddress },
    { label: 'Residential Address', value: data.ResidentialAddress },
    { label: "Mother's Name", value: data.MotherName },
    { label: 'Place Of Posting', value: data.PlaceOfPosting },
    { label: 'Office District', value: data.OfficeDistrict },
  ];

  const handleSignOut = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={require('../asset/image/imageTwo.png')}
              style={styles.logo}
            />
            <Text style={styles.headerTitle}>BICTA</Text>
          </View>

          <TouchableOpacity onPress={toggleMenu}>
            <Text style={styles.menuIcon}>{'\u2630'}</Text>
          </TouchableOpacity>
        </View>

        {menuOpen && (
          <View style={styles.menuContainer}>
            <View style={styles.menuContent}>
              <Text style={styles.menuItem}>Dashboard</Text>
              <Text style={styles.menuItem}>My Profile</Text>

              <TouchableOpacity
                onPress={() =>
                  setActiveMenu(activeMenu === 'course' ? null : 'course')
                }
                style={styles.menuItem}
              >
                <Text>My Courses {'\u25BC'}</Text>
              </TouchableOpacity>

              {activeMenu === 'course' && (
                <View>
                  <View style={styles.line} />
                  <View style={styles.subMenu}>
                    <Text style={styles.subMenuText}>Time Table</Text>
                  </View>
                  <View style={styles.line} />
                  <View style={styles.subMenu}>
                    <Text style={styles.subMenuText}>Assignment</Text>
                  </View>
                  <View style={styles.line} />
                  <View style={styles.subMenu}>
                    <Text style={styles.subMenuText}>Course Module</Text>
                  </View>
                  <View style={styles.line} />
                </View>
              )}

              <Text style={styles.menuItem}>Hostel</Text>

              <TouchableOpacity
                onPress={() =>
                  setActiveMenu(activeMenu === 'comm' ? null : 'comm')
                }
                style={styles.menuItem}
              >
                <Text>Communication Management {'\u25BC'}</Text>
              </TouchableOpacity>

              {activeMenu === 'comm' && (
                <View>
                  <View style={styles.line} />
                  <View style={styles.subMenu}>
                    <Text style={styles.subMenuText}>
                      Show Cause Notification
                    </Text>
                  </View>
                  <View style={styles.line} />
                  <View style={styles.subMenu}>
                    <Text style={styles.subMenuText}>Application</Text>
                  </View>
                  <View style={styles.line} />
                </View>
              )}

              <TouchableOpacity
                onPress={() =>
                  setActiveMenu(activeMenu === 'exam' ? null : 'exam')
                }
                style={styles.menuItem}
              >
                <Text>Examination {'\u25BC'}</Text>
              </TouchableOpacity>

              {activeMenu === 'exam' && (
                <View>
                  <View style={styles.line} />
                  <View style={styles.subMenu}>
                    <Text style={styles.subMenuText}>Exam Response</Text>
                  </View>
                  <View style={styles.line} />
                </View>
              )}

              <TouchableOpacity
                onPress={() =>
                  setActiveMenu(activeMenu === 'support' ? null : 'support')
                }
                style={styles.menuItem}
              >
                <Text>Support {'\u25BC'}</Text>
              </TouchableOpacity>

              {activeMenu === 'support' && (
                <View>
                  <View style={styles.line} />
                  <View style={styles.subMenu}>
                    <Text style={styles.subMenuText}>Raise Complain</Text>
                  </View>
                  <View style={styles.line} />
                </View>
              )}

              <TouchableOpacity
                onPress={() =>
                  setActiveMenu(activeMenu === 'feedback' ? null : 'feedback')
                }
                style={styles.menuItem}
              >
                <Text>Feedback {'\u25BC'}</Text>
              </TouchableOpacity>

              {activeMenu === 'feedback' && (
                <View>
                  <View style={styles.line} />
                  <View style={styles.subMenu}>
                    <Text style={styles.subMenuText}>Mess Feedback</Text>
                  </View>
                  <View style={styles.line} />
                  <View style={styles.subMenu}>
                    <Text style={styles.subMenuText}>
                      House Keeping Feedback
                    </Text>
                  </View>
                  <View style={styles.line} />
                  <View style={styles.subMenu}>
                    <Text style={styles.subMenuText}>Overall Feedback</Text>
                  </View>
                  <View style={styles.line} />
                </View>
              )}
            </View>
          </View>
        )}

        <View style={styles.topInfo}>
          <Text>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
          <View style={styles.timeRow}>
            <Text style={styles.timeText}>
              {new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
            <Text style={styles.bell}>{'\uD83D\uDD14'}</Text>

            <View style={styles.userWrapper}>
              <TouchableOpacity
                onPress={() => setUserMenu(!userMenu)}
                style={styles.userBtn}
              >
                <Text>👤</Text>
                <Text style={styles.dropdownIcon}>{'\u25BC'}</Text>
              </TouchableOpacity>

              {userMenu && (
                <View style={styles.userDropdown}>
                  <TouchableOpacity onPress={handleSignOut}>
                    <Text style={styles.logoutText}>Sign Out</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>

        <View style={styles.profileHeader}>
          <Text style={styles.profileTitle}>My Profile</Text>
        </View>

        <View style={styles.tabRow}>
          {['Profile', 'Document', 'Indemnity Bond'].map(item => (
            <TouchableOpacity
              key={item}
              onPress={() => setActiveTab(item)}
              style={[styles.tab, activeTab === item && styles.activeTab]}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {activeTab === 'Profile' ? (
          <View style={styles.profileContainer}>
            <View style={styles.profileCard}>
              <View style={styles.profileContent}>
                <Text style={styles.attendTitle}>Attendance</Text>
                <Text style={styles.attendWarn}>
                  Minimum 96% attendance required for certificate generation
                </Text>

                <View style={styles.dataList}>
                  {profileFields.map((item, index) => (
                    <View key={index} style={styles.profileRow}>
                      <Text style={styles.label}>{item.label} : </Text>
                      <Text>{item.value}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.printing}>
                <TouchableOpacity style={styles.printBtn}>
                  <Icon name="print" size={24} color={COLORS.white} />
                  <Text style={styles.printText}>{STRINGS.downloadPrint}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>@2026 BIPARD</Text>
              <Text style={styles.footerText}>
                {STRINGS.designAndDeveloped}
              </Text>
            </View>
          </View>
        ) : activeTab === 'Document' ? (
          <View style={styles.docContainer}>
            <View style={styles.docCard}>
              {[
                {
                  label: 'Signature',
                  img: require('../asset/image/sign.jpeg'),
                },
                {
                  label: 'Photo',
                  img: require('../asset/image/myImage.jpeg'),
                },
                {
                  label: 'Aadhaar Card',
                  img: require('../asset/image/aadhaar.jpeg'),
                },
              ].map((item, index) => (
                <View key={index} style={styles.docRow}>
                  <Text>{item.label}</Text>
                  <TouchableOpacity
                    onPress={() => openImage(item.img)}
                    style={styles.eyeBtn}
                  >
                    <Icon name="visibility" size={20} color={COLORS.darkBlue} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.container3}>
            <View style={styles.card2}>
              <Image
                title={'image'}
                source={require('../asset/image/imageTwo.png')}
                style={styles.icon}
              ></Image>
              <View style={styles.bondField}>
                <Text style={styles.hindiTitle}>{STRINGS.hindiText}</Text>
                <Text style={styles.address}>कुशियाबा, गया - 823001</Text>
                <Text style={styles.mainTitle}>{STRINGS.headingText}</Text>
                <Text style={styles.subAddress}>
                  Kushidanga, Gaya Jee - 823001
                </Text>
                <Text style={styles.bondHeading}>{STRINGS.traineeBond}</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {selectedImage && (
              <Image
                source={selectedImage}
                style={styles.modalImage}
                resizeMode="contain"
              />
            )}

            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.closeBtn}
            >
              <Text style={styles.closeText}>{STRINGS.close}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.lightGray },
  header: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 15,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 40, height: 40, borderRadius: 20 },
  headerTitle: { marginLeft: 10, fontWeight: 'bold', fontSize: 18 },
  menuIcon: { fontSize: 22 },

  menuContainer: {
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  menuContent: { padding: 15 },
  menuItem: { marginTop: 10 },
  line: {
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    marginTop: 5,
  },
  subMenu: { marginLeft: 10 },
  subMenuText: { marginTop: 5, color: COLORS.secondary },

  topInfo: { alignItems: 'center', marginTop: 10 },
  timeRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  timeText: { fontWeight: 'bold' },
  bell: { marginLeft: 10 },
  userWrapper: { position: 'relative' },
  userBtn: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownIcon: { marginLeft: 5 },
  userDropdown: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    elevation: 10,
    zIndex: 999,
    width: 80,
  },
  logoutText: {
    padding: 10,
    color: COLORS.danger,
    fontWeight: 'bold',
  },

  profileHeader: {
    backgroundColor: COLORS.white,
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
  },
  profileTitle: {
    color: COLORS.secondary,
    fontWeight: 'bold',
    fontSize: 17,
  },

  tabRow: { flexDirection: 'row', marginHorizontal: 10 },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#bed8f3',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.blue,
  },

  profileContainer: { padding: 10 },
  profileCard: {
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    elevation: 9,
  },
  profileContent: {
    padding: 10,
  },
  attendTitle: { fontWeight: 'bold', fontSize: 16 },
  attendWarn: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.danger,
  },
  profileRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
    width: '100%',
  },
  label: { fontWeight: 'bold' },

  printing: { padding: 10 },
  printBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: 20,
    padding: 8,
  },
  printText: { color: COLORS.white, marginLeft: 3 },

  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 10,
  },
  footerText: { fontSize: 11 },

  docContainer: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    padding: 15,
  },
  docCard: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 15,
  },
  docRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  eyeBtn: {
    borderWidth: 1,
    borderColor: '#c5d3e0',
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#f7f9fc',
  },

  container2: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '85%',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 250,
  },
  closeBtn: {
    marginTop: 15,
    backgroundColor: COLORS.darkBlue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  closeText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  icon: {
    height: 70,
    width: 70,
    marginTop: 10,
  },
  container3: {
    padding: 10,
  },
  card2: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    elevation: 3,
  },
  hindiTitle: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 5,
  },
  bondField: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  mainTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  bondHeading: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 5,
  },
  dataList: {
    borderWidth: 0.2,
    borderColor: COLORS.border,
    borderRadius: 7,
    backgroundColor: COLORS.white,
    marginTop: 10,
    padding: 10,
  },
});
