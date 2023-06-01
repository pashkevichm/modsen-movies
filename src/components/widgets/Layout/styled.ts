import styled from 'styled-components/native';



export const StyledAppSafeAreaView = styled.SafeAreaView`
	flex: 1;
	backgroundcolor: ${({theme}) => theme.themeType.themeBackgroundColor};
`;