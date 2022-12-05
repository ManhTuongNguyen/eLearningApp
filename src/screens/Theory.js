import * as React from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Divider, useTheme, ListItem } from '@rneui/themed';


function Theory({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('Tenses')}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>1 - Các thì trong tiếng anh</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'CacDangThucDongTu',
                name: 'Các dạng thức của động từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>2 - Các dạng thức của động từ</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'DongTuKhiemKhuyet',
                name: 'Động từ khiếm khuyết'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>3 - Động từ khiếm khuyết</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('TypeOfWords')}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>4 - Các loại từ</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'SoSanh',
                name: 'So sánh trong tiếng anh'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>5 - So sánh trong tiếng anh</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'CauBiDong',
                name: 'Câu bị động'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>6 - Câu Bị động</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'CauGianTiep',
                name: 'Câu gián tiếp'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>7 - Câu gián tiếp</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'CauGiaDinh',
                name: 'Câu giả định'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>8 - Câu giả định</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'SuHoaHopChuNguVaDongTu',
                name: 'Sự hòa hợp giữa chủ ngữ và động từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>9 - Sự hòa hợp giữa chủ ngữ và động từ</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'CauTaoTu',
                name: 'Cấu tạo từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>10 - Cấu tạo từ</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'DaoNgu',
                name: 'Đảo ngữ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>11 - Đảo ngữ</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'SuKetHopTu',
                name: 'Sự kết hợp từ'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>12 - Sự kết hợp từ</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'MenhDe',
                name: 'Mệnh đề'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>13 - Mệnh đề</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'NguAm',
                name: 'Ngữ âm'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>14 - Ngữ âm</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'SuHoaHopChuNguVaDongTu',
                name: 'Sự hòa hợp giữa chủ ngữ và động từ'
              })
            }}>
            <ListItem.Swipeable onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'CumDongTu',
                name: 'Cụm động từ'
              })
            }}>
                <ListItem.Content>
                    <ListItem.Title>15 - Cụm động từ</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'DongTuDacBiet',
                name: 'Một số động từ đặc biệt'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>16 - Một số động từ đặc biệt (need, dare, to be, get)</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'CauHoi',
                name: 'Câu hỏi'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>17 - Câu hỏi</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'LoiNoiPhuHoa',
                name: 'Lối nói phụ họa'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>18 - Lối nói phụ họa</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'CauPhuDinh',
                name: 'Câu phủ định'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>19 - Câu phủ định</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'CauGiaDinh',
                name: 'Câu giả định'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>20 - Câu giả định</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'CachSuDungMotSoCauTruc',
                name: 'Cách sử dụng một số cấu trúc'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>21 - Cách sử dụng một số cấu trúc</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'CacCumTuDienTaSoLuong',
                name: 'Các cụm từ diễn tả số lượng'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>22 - Các cụm từ diễn tả số lượng</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'MuchManyAlotOf',
                name: 'Much, many, alot of và lots of - trong một số trường hợp khác'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>23 - Much, many, alot of và lots of - trong một số trường hợp khác</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'SuPhuHopVeThoiGianGiuaHaiVeMotCau',
                name: 'Sự phù hợp về thời gian giữa hai vế của một câu'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>24 - Sự phù hợp về thời gian giữa hai vế của một câu</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'MotTramCumTuThuongGap',
                name: 'Một trăm cụm từ thường gặp'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>25 - 100 cụm từ thường thường gặp</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'MotSoCauTrucThongDung1',
                name: 'Một số cấu trúc thông dụng thường gặp (phần 1)'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>26 - Một số cấu trúc thông dụng thường gặp (phần 1)</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'MotSoCauTrucThongDung2',
                name: 'Một số cấu trúc thông dụng thường gặp (phần 2)'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>27 - Một số cấu trúc thông dụng thường gặp (phần 2)</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'MotSoCauTrucThongDung3',
                name: 'Một số cấu trúc thông dụng thường gặp (phần 3)'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>28 - Một số cấu trúc thông dụng thường gặp (phần 3)</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'DocHieu',
                name: 'Đọc hiểu'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>29 - Đọc hiểu</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('TheoryContent', {
                template: 'BangDongTuBatQuyTac',
                name: 'Bảng động từ bất quy tắc'
              })
            }}>
            <ListItem.Swipeable>
                <ListItem.Content>
                    <ListItem.Title>30 - Bảng động từ bất quy tắc</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
            <Divider width={1} color="#EEEEEE" />
            </TouchableOpacity>
            


            {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
            </ScrollView>
        </SafeAreaView >
    );
}


export default Theory