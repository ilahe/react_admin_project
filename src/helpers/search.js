import {Button, DatePicker, Input, Select} from "antd";
import React from "react";
import {SearchOutlined} from "@ant-design/icons";
const {Option} = Select;

export const SearchByFullname = (
    <Input
        placeholder="Ad soyad"
        onChange={e => {
            console.log("ad soyad ch", e.target.value)
        }}
    />
);

export const SearchByUsername = (
    <Input
        placeholder="İstifadəçi adı"
        onChange={e => {
            console.log("username ch", e.target.value)
        }}
    />
);

export const SearchByEmail = (
    <Input
        placeholder="Email"
        onChange={e => {
            console.log("email ch", e.target.value)
        }}
    />
);

export const SearchByCategory = (
    <Input
        placeholder="Bölmə axtar"
        onChange={e => {
            console.log("bolme ch", e.target.value)
        }}
    />
);

export const SearchBySubCategory = (
    <Input
        placeholder="Alt bölmə"
        onChange={e => {
            console.log("bolme ch", e.target.value)
        }}
    />
);

export const SearchByDescription = (
    <Input
        placeholder="Açıqlama"
        onChange={e => {
            console.log("bolme ch", e.target.value)
        }}
    />
);

export const SearchByKeywords = (
    <Input
        placeholder="Açar sözlər"
        onChange={e => {
            console.log("bolme ch", e.target.value)
        }}
    />
);

export const SearchByStatus = (
    <Select
        showSearch
        placeholder="Status seçin"
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        <Option value="0">Option 1</Option>
        <Option value="1">Option 2</Option>
    </Select>
);

export const SearchButton = (
    <Button type="primary" block>
        <SearchOutlined/>
        Axtarış et
    </Button>
);

export const SearchByPhone = (
    <Input
        placeholder="Mobil nömrə"
        onChange={e => {
            console.log("nomre ch", e.target.value)
        }}
    />
);

export const SearchBySinger = (
    <Input
        placeholder="Müğənni adı"
        onChange={e => {
            console.log("mugenni ch", e.target.value)
        }}
    />
);

export const SearchByMusic = (
    <Input
        placeholder="Mahnı adı"
        onChange={e => {
            console.log("Mahnı ch", e.target.value)
        }}
    />
);

export const SearchByMp3Users = (
    <Select
        showSearch
        placeholder="İstifadəçi seçin"
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        <Option value="0">Option 1</Option>
        <Option value="1">Option 2</Option>
    </Select>
);

export const SearchByCode = (
    <Input
        placeholder="Kod"
        onChange={e => {
            console.log("kod ch", e.target.value)
        }}
    />
);

export const SearchByHoroscope = (
    <Input
        placeholder="Bürc"
        onChange={e => {
            console.log("burc ch", e.target.value)
        }}
    />
);

export const SearchByHoroscopeLove = (
    <Input
        placeholder="Sevgi bürcü"
        onChange={e => {
            console.log("sevgi burc ch", e.target.value)
        }}
    />
);

export const SearchByHoroscopeMatching = (
    <Input
        placeholder="Uyğun bürc"
        onChange={e => {
            console.log("Uyğun burc ch", e.target.value)
        }}
    />
);

export const SearchByHoroscopeType = (
    <Select
        showSearch
        placeholder="Tip seçin"
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        <Option value="0">Option 1</Option>
        <Option value="1">Option 2</Option>
    </Select>
);

export const SearchByDate = (
    <DatePicker
        placeholder="Vaxt seçin"/>
);

export const SearchByTitle = (
    <Input
        placeholder="Başlıq axtar"
        onChange={e => {
            console.log("basliq ch", e.target.value)
        }}
    />
);

export const SearchById = (
    <Input
        placeholder="ID axtar"
        onChange={e => {
            console.log("id ch", e.target.value)
        }}
    />
);

export const SearchByAuthor = (
    <Select
        showSearch
        placeholder="Müəllif seçin"
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        <Option value="0">Option 1</Option>
        <Option value="1">Option 2</Option>
    </Select>
);

export const SearchByIP = (
    <Input
        placeholder="IP axtar"
        onChange={e => {
            console.log("ip ch", e.target.value)
        }}
    />
);

export const SearchByCategoryLinks = (
    <Select
        showSearch
        placeholder="Kateqoriya linki seçin"
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        <Option value="0">Option 1</Option>
        <Option value="1">Option 2</Option>
    </Select>
);

export const SearchByChangefreq = (
    <Input
        placeholder="Changefreq"
        onChange={e => {
            console.log("Changefreq ch", e.target.value)
        }}
    />
);

export const SearchByPriority = (
    <Input
        placeholder="Prioritet"
        onChange={e => {
            console.log("Prioritet ch", e.target.value)
        }}
    />
);

export const SearchByFolder = (
    <Select
        showSearch
        placeholder="Folder seçin"
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        <Option value="0">Folder 1</Option>
        <Option value="1">Folder 2</Option>
    </Select>
);

export const SearchByUrl = (
    <Input
        placeholder="Url"
        onChange={e => {
            console.log("url ch", e.target.value)
        }}
    />
);