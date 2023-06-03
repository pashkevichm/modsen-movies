import styled from 'styled-components/native';



export const StyledAppSafeAreaView = styled.SafeAreaView`
	flex: 1;
	background-color: ${({theme}) => theme.themeType.themeBackgroundColor};
`;