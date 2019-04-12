// ************************************************************************** //
//                                                                            //
//                                          :::    ::: :::::::::: :::   :::   //
//   i18n.js                               :+:    :+: :+:        :+:   :+:    //
//                                        +:+    +:+ +:+         +:+ +:+      //
//   By: tcollart                        +#++:++#++ +#++:++#     +#++:        //
//                                      +#+    +#+ +#+           +#+          //
//   Created: 2019/04/12 12:00:23      #+#    #+# #+#           #+#           //
//   Updated: 2019/04/12 12:00:32     ###    ### ##########    ###.network    //
//                                                                            //
//   @format @flow @lint-ignore-every XPLATJSCOPYRIGHT1                       //
// ************************************************************************** //

import I18n from 'react-native-i18n';
import en from './locales/en';
import fr from './locales/fr';

I18n.fallbacks = true;

I18n.translations = {en, fr};

export default I18n;
